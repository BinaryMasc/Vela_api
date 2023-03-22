export interface IPostService {
    getLatestPosts(): Promise<any>;
    getAllPosts(pagination?: any): Promise<any>;
    getPostById(id: string): Promise<any>;
    getAbout(): Promise<any>;
  }
  