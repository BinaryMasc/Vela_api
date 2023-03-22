import { BaseHttpController, controller, httpGet, httpPost, httpPut, httpDelete, requestParam } from 'inversify-express-utils';
import { inject } from 'inversify';
import { TYPES } from '../constants/types';
import { IUserService } from '../interfaces/IUserService';

@controller('/users')
export class UserController extends BaseHttpController {
  constructor(
    @inject(TYPES.UserService) private userService: IUserService
  ) {
    super();
  }

  @httpPost('/register')
  public async register() {
    // Your register implementation here
  }

  @httpPost('/login')
  public async login() {
    // Your login implementation here
  }

  @httpGet('/logout')
  public async logout() {
    return "Hello world";
  }

  @httpGet('/:id')
  public async getUserById(@requestParam('id') id: string) {
    // Your getUserById implementation here
  }

  @httpPut('/:id')
  public async updateUser(@requestParam('id') id: string) {
    // Your updateUser implementation here
  }

  @httpDelete('/:id')
  public async deleteUser(@requestParam('id') id: string) {
    // Your deleteUser implementation here
  }
}
