import { getPostDetailsUrl} from "~/data/posts";
import type { PostDetails } from '~/data/posts';

export default defineEventHandler ((event) => {
    const postSlug = getRouterParam(event, 'post')!
    return $fetch<PostDetails>(getPostDetailsUrl(postSlug))
})