<script setup lang="ts">
import { useParam } from '~/compostables/useParam';
import { useCategoryState } from '~/compostables/useCategoryState';
import { useServerRoute } from '~/compostables/useServerRoute';
import type { PostDetails } from '~/data/posts';
definePageMeta({
  layout: 'breadcrumb'
})


const { data: post} = await useServerRoute<PostDetails>()

const categoryState = useCategoryState();

if (post.value){
    categoryState.value = {
        name: post.value.category.name,
        slug: post.value.category.slug
    }
}
</script>

<template>
    <main>
        <template v-if="post">
            <h1>{{ post.title }}
                <CategoryLink :category="post.category" />
            </h1>
            <RenderMarkdown :source="post.content" />
            <ClientOnly>
                <Transition>
                    <CommentSection :post-id="post.id" />
                </Transition>
            </ClientOnly>
        </template>
    </main>
</template>