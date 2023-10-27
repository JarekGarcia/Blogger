import { AppState } from "../AppState"
import { Blog } from "../models/Blog"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BlogsService {
    async getBlogs() {
        const res = await api.get('api/blogs')
        // logger.log(res.data)
        const newBlogs = res.data.map(pojos => new Blog(pojos))
        AppState.blogs = newBlogs
        logger.log(AppState.blogs)
    }
}

export const blogsService = new BlogsService()