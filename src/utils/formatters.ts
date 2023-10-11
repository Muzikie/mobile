// import BigNumber from 'bignumber.js';

export const formatThousands = (num: number): string => {
  const si = [
    {value: 1e18, sign: 'E'},
    {value: 1e15, sign: 'P'},
    {value: 1e12, sign: 'T'},
    {value: 1e9, sign: 'B'},
    {value: 1e6, sign: 'M'},
    {value: 1e3, sign: 'K'},
  ];

  const signItem = si.find(item => num >= item.value);
  return !signItem
    ? num.toString()
    : (num / signItem.value)
        .toFixed(2)
        .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + signItem.sign;
};

export const getYear = (num: number): string => {
  const year = new Date(num * 1000).getFullYear();
  return year.toString();
};

// export const fromBaseToken = (
//   num: string,
//   token?: string | undefined,
// ): string => {
//   const formatted = BigNumber(num).dividedBy(BigNumber(1e8)).toFixed(4);
//   return token ? `${formatted} ${token}` : formatted;
// };

// export const toBaseToken = (num: string): string =>
//   BigNumber(num).multipliedBy(BigNumber(1e8)).toFixed(0);

export const truncateAddress = (address: string): string => {
  return address.replace(/^(.{6})(.+)?(.{5})$/, '$1...$3');
};
