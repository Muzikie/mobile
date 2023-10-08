export enum SubmissionStatuses {
  success = 'success',
  error = 'error',
  pending = 'pending',
}

export interface FeedbackProps {
  style?: object;
  status: SubmissionStatuses;
  message?: string;
}
