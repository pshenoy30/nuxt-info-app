<script setup lang="ts">
import type { CategoryDetails } from '~/data/categories';
import { getCategoryDetailsUrl } from '~/data/categories';
import { useParam } from '~/compostables/useParam';
import { useCategoryState } from '~/compostables/useCategoryState';
const categorySlug = useParam('category');

const {data: category} = await useFetch<CategoryDetails>(getCategoryDetailsUrl(categorySlug))

const categoryState = useCategoryState();

definePageMeta({
  layout: 'breadcrumb'
})

if (category.value){
    categoryState.value = {
        name: category.value.name,
        slug: category.value.slug
    }
}
</script>

<template>
    <main>
        <template v-if="category">
            <h1>
            Category: {{ category.name }}
            </h1>
            <div>
                <PostCard v-for="post in category.posts" :key="post.id" :post="post" class="card" />
            </div>
        </template>
    </main>
</template>