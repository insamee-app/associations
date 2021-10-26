<template>
  <main class="pt-16 w-full h-screen flex flex-col overflow-hidden relative">
    <div class="flex justify-center">
      <NuxtLink :to="{ name: 'index' }">
        <NuxtImg
          src="/logos/associations.png"
          height="128"
          alt="logo de la plateforme associations"
          class="mx-auto"
        />
      </NuxtLink>
    </div>
    <Nuxt />
  </main>
</template>
