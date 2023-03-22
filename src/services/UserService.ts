import { injectable } from 'inversify';
import { IUserService, User } from '../interfaces/IUserService';

@injectable()
export class UserService implements IUserService {
  private users: User[] = [];

  async createUser(name: string, email: string): Promise<User> {
    const user: User = {
      id: Date.now().toString(),
      name,
      email,
    };

    this.users.push(user);
    return user;
  }

  async getUserById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);
    return user || null;
  }

  async updateUser(id: string, name?: string, email?: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      return null;
    }

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    return user;
  }

  async deleteUser(id: string): Promise<boolean> {
    const index = this.users.findIndex((user) => user.id === id);

    if (index === -1) {
      return false;
    }

    this.users.splice(index, 1);
    return true;
  }
}
