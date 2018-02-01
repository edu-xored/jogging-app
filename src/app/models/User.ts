import { Record } from './Record';

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  records: Record[];
}
