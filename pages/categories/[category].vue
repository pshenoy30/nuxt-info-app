<script setup lang="ts">
import { useCategoryState } from '~/compostables/useCategoryState';
import { useServerRoute } from '~/compostables/useServerRoute';
import type { CategoryDetails } from '~/data/categories';

const { data: category } = await useServerRoute<CategoryDetails>()

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