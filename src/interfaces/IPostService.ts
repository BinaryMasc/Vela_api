import { IPost } from "../models/Post";

export interface IPostService {
    getLatestPosts(limit: number): Promise<any>;
    getAllPosts(pagination?: any): Promise<any>;
    getPostById(id: string): Promise<any>;
    getAbout(): Promise<any>;
    createPost(title: string, content: string, createdBy: string): Promise<IPost>;
  }
  