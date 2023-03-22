import { injectable } from 'inversify';
import { IPostService } from '../interfaces/IPostService';
@injectable()
export class PostService implements IPostService {
  async getLatestPosts(): Promise<any> {
    // Implementación para obtener las últimas 5 noticias
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

