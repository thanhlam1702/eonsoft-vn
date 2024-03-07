<script setup>
useSeoMeta({
  title: 'EonSoft - Technology Solutions',
});
useHead({
  htmlAttrs: {
    lang: 'en',
  },
});
</script>

<template>
  <div id="app" class="bg-black min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
