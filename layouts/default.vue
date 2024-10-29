<template>
    <div class="layout">
        <nav class="nav">
            <NuxtLink class="link" to="/" :class="{current: $route.path === '/'}">Home</NuxtLink>
            <NuxtLink class="link" to="/categories" :class="{current: $route.path === '/categories'}">Categories</NuxtLink>
        </nav>
        <slot />
    </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/colors';

.layout {
  width: 620px;
  margin: 50px auto 50px;
}
.nav {
  margin-top: 10px;
  margin-bottom: 30px;
  position: relative;
}

.nav .link {
  color: colors.$green-medium;
  display: inline-block;
  font-size: 14pt;
  margin-right:20px;
}

.nav .link:hover {
  color: colors.$green-light;
}

.nav .link.current {
  text-decoration: underline;
  color: colors.$green-light;
  pointer-events: none;
}
</style>