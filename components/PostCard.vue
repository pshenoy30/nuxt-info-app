<script setup lang="ts">
import type { Post } from '../data/posts'

const { post} = defineProps<{ post: Post }> ()

const isHover = ref(false)
</script>


<template>
    <div class="card" :class="{hover: isHover}">
        <h2> {{ post.title }}</h2>
        <CategoryLink :category="post.category" />
        <div class="content">
            <RenderMarkdown :source="post.intro" />
            <NuxtLink :to="`/posts/${post.slug}`" class="more" @mouseenter="isHover = true" @mouseleave="isHover=false">More...</NuxtLink>
        </div>
    </div>
</template>  

<style scoped lang="scss">
@use '../assets/styles/colors';
.card {
  padding: 15px 15px 35px;
  border: 1px solid colors.$green-dark;
  border-radius: 5px;
  margin-bottom: 25px;
  font-size: 12pt;
  position: relative;
}

.card .more {
  color: colors.$green-medium;
  font-size: 12pt;
  padding: 5px 10px;
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.card .title {
  font-size: 20pt;
}

.card.hover {
  border-color: colors.$green-medium;
}

.card.hover .title {
  color: colors.$green-light;
}

.card.hover .more {
  color: colors.$green-light;
}
</style>
    
