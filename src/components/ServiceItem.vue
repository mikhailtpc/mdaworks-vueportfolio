<template>
  <div
    class="flex justify-between items-start p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group"
  >
    <div class="flex-1">
      <h4
        class="font-semibold text-brand-dark mb-1 group-hover:text-brand-accent transition-colors"
      >
        {{ title }}
      </h4>
      <p class="text-sm text-slate-600">{{ desc }}</p>
    </div>
    <span class="text-sm font-bold text-brand-tech ml-4 whitespace-nowrap">{{ price }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  desc: String,
  price: String,
  color: {
    type: String,
    default: 'tech',
  },
})
</script>
