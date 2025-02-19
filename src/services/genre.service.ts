//INTERNAL COMPONENTS
import { HTTPBaseService } from "./http-base.service";

export class GenreService {
  static baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  public static async getAll() {
    const baseService = new HTTPBaseService(this.baseUrl);
    const instance =  await baseService.getInstance();
    const response = await instance.get('genres');
    if (response.error) {
      throw new Error(response.message);
    } else {
      return response;          
    }   
  };
};