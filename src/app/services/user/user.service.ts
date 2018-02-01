import { User } from '../../models/User';

/**
 * Service that provides user data.
 */
export class UserService {

  constructor() {
  }

  getCurrentUserName(): string {
    return "";
  }

  isUserAuthorized(): boolean {
    return true;
  }

}
