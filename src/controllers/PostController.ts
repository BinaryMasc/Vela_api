import { BaseHttpController, controller, httpGet, requestParam } from 'inversify-express-utils';
import { inject } from 'inversify';
import { TYPES } from '../constants/types';
import { IPostService } from '../interfaces/IPostService';

@controller('/posts')
export class PostController extends BaseHttpController {
  constructor(
    @inject(TYPES.PostService) private postService: IPostService
  ) {
    super();
  }

  @httpGet('/latest')
  public async getLatestPosts() {
    return {post: "Hello world"};
    //return this.postService.getLatestPosts();
  }

  @httpGet('/')
  public async getAllPosts() {
    // Aquí puedes pasar los parámetros de paginación a la función getAllPosts()
    return this.postService.getAllPosts();
  }

  @httpGet('/:id')
  public async getPostById(@requestParam('id') id: string) {
    return this.postService.getPostById(id);
  }

  @httpGet('/about')
  public async getAbout() {
    return this.postService.getAbout();
  }
}

