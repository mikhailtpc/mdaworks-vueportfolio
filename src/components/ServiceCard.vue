<template>
  <div class="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors group">
    <div class="flex justify-between items-start">
      <div class="flex-1">
        <h4
          class="font-semibold text-brand-dark mb-1 group-hover:text-brand-accent transition-colors"
        >
          {{ title }}
        </h4>
        <p class="text-sm text-slate-600">{{ description }}</p>
      </div>
      <span :class="`text-sm font-bold ml-4 whitespace-nowrap text-brand-${color}`">{{
        price
      }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  price: String,
  color: {
    type: String,
    default: 'tech',
  },
})
</script>
