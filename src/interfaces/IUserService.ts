export interface IUserService {
    createUser(name: string, email: string): Promise<User>;
    getUserById(id: string): Promise<User | null>;
    updateUser(id: string, name?: string, email?: string): Promise<User | null>;
    deleteUser(id: string): Promise<boolean>;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
  }
  
