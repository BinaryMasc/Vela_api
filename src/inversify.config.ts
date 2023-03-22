import { Container } from 'inversify';
import { UserController } from './controllers/UserController';
import { UserService } from './services/UserService';
import { IUserService } from './interfaces/IUserService';
import { TYPES } from './constants/types';
import { PostService } from './services/PostService';
import { IPostService } from './interfaces/IPostService';

const container = new Container();

container.bind<IUserService>(TYPES.UserService).to(UserService);
container.bind<IPostService>(TYPES.PostService).to(PostService);

export { container };
