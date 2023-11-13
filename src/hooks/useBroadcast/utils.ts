import {transactions} from '@liskhq/lisk-client';
import md5 from 'md5';
import {CHAIN_ID} from '../../config/network';
import {SCHEMAS} from '../../config/schemas';
import {Buffer} from 'buffer';
import {BroadcastProps, SignTransactionResult} from './types';

export const signTransaction = async ({
  command,
  module,
  params,
  account,
}: BroadcastProps): Promise<SignTransactionResult | Error> => {
  const schema = SCHEMAS[`${module}/${command}`];
  if (!schema) {
    return new Error('Could not find the corresponding schema');
  }

  // Create blockchain transaction and broadcast it
  const tx = {
    module,
    command,
    nonce: BigInt(account.nonce),
    senderPublicKey: account.publicKey,
    params,
  };
  let signedTx;
  try {
    const fee = transactions.computeMinFee(tx, schema);
    // Sign the transaction
    signedTx = transactions.signTransactionWithPrivateKey(
      {...tx, fee},
      CHAIN_ID,
      account.privateKey,
      schema,
    );
  } catch (e) {
    console.log(e);
  }
  // @todo improve the transaction signature validation
  // meaning, check if there is an array called signatures
  // which includes a valid signature (buffer of length 64)
  if (!signedTx?.id || !Buffer.isBuffer(signedTx.id)) {
    return new Error('Error while signing transaction');
  }

  const txId = signedTx.id.toString('hex');
  const txBytes = transactions.getBytes(signedTx, schema);

  return {
    transaction: signedTx,
    txId,
    txBytes,
  };
};
