import type { Post} from "~/data/posts";
import { getPostsUrl } from "~/data/posts";

export default  defineEventHandler((event) => {
    return $fetch<Post []>(getPostsUrl())
})