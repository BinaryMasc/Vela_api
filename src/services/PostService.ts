import { injectable } from 'inversify';
import { IPostService } from '../interfaces/IPostService';
import { IPost, Post } from '../models/Post';
@injectable()
export class PostService implements IPostService {
  async getLatestPosts(limit: number): Promise<any> {
    // Implementación para obtener las últimas 5 noticias
    return await Post.find().sort({ createdAt: -1 }).limit(limit);
    //return {post: "Hello world from the service"};
  }

  async createPost(title: string, content: string, createdBy: string): Promise<IPost> {
    console.log("creating post...");
    const post = new Post({ title, content, createdBy });
    console.log(post);
    return await post.save();
  }

  async getAllPosts(pagination?: any): Promise<any> {
    // Implementación para obtener todas las noticias con paginación
  }

  async getPostById(id: string): Promise<any> {
    // Implementación para obtener información de una noticia
  }

  async getAbout(): Promise<any> {
    // Implementación para obtener información acerca del sitio
  }
}

