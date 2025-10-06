<template>
  <div class="h-screen w-full flex items-center justify-center bg-white">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 4px solid #e5e7eb; /* abu-abu muda */
  border-top: 4px solid #3b82f6; /* biru Tailwind (blue-500) */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Animasi putar */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
