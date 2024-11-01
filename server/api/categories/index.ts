import type { Category } from '~/data/categories';
import { getCategoriesUrl } from '~/data/categories';

export default defineEventHandler((event) => {
    return $fetch<Category []>(getCategoriesUrl())
})