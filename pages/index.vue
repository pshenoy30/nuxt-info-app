<script setup lang="ts">
import { getPostsUrl } from '../data/posts'
import type { Post } from '../data/posts'

const {data: posts} = await useFetch<Post []>(getPostsUrl());


</script>

<template>
  <main>
    <h1>Nuxt.js Examples</h1>
    <div>
      <PostCard v-for="post in posts" :key="post.id" :post="post" class="card" />
    </div>
  </main>
</template>

<style scoped lang="scss">
@use '../assets/styles/colors';
.card {
  padding: 15px;
  border: 1px solid colors.$green-dark;
  border-radius: 5px;
  margin-bottom: 25px;
  font-size: 12pt;
}

.card .title {
  font-size: 20pt;
}

</style>
