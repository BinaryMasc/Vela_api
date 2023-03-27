import { controller, httpPost, httpGet, request, response, BaseHttpController, requestParam } from 'inversify-express-utils';
import { inject } from 'inversify';
import { Request, Response } from 'express';
import { PostService } from '../services/PostService';
import { IPostService } from '../interfaces/IPostService';
import { TYPES } from '../constants/types';
import { IPost } from '../models/Post';

@controller('/posts')
export class PostController extends BaseHttpController {
  constructor(
    @inject(TYPES.PostService) private postService: IPostService
  ) {
    super();
  }

  @httpGet('/latest')
  public async getLatestPosts() {
    return this.postService.getLatestPosts(5);
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

  @httpPost('/create')
  public async createPost(@request() req: Request, @response() res: Response) {
    const post: IPost = req.body;

    let retPost = this.postService.createPost(post.title, post.content, "developer");

    res.status(201).json({ success: true, data: retPost });
  }
}

