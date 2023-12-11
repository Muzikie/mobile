import {Anchor, FetchStatus} from '../../config/types';

export interface SubmitFormProps {
  style?: object;
}

export interface Feedback {
  status: FetchStatus;
  message: string;
}

export interface ConfirmProps {
  anchor: Omit<Anchor, 'anchorID' | 'submitter'>;
  onDone: (feedback: Feedback) => void;
}
