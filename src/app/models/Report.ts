export interface Report {
  id?: string;
  readonly timestamp: string;
  readonly distance: number;
  readonly time: string;
  userId: string;
}