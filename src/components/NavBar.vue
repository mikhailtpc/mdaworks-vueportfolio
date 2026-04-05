<template>
  <nav class="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold text-brand-dark flex items-center gap-2">
          <!-- <img src="/images/logo.png" alt="MDA Works" class="h-8 w-auto" /> -->
          <span
            class="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white text-sm"
            >M</span
          >
          <span
            class="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white text-sm"
            >MDA Works</span
          >
        </router-link>

        <div class="hidden md:flex items-center gap-8">
          <router-link
            to="/services"
            class="text-slate-600 hover:text-brand-accent font-medium transition-colors"
            >Services</router-link
          >
          <router-link
            to="/projects"
            class="text-slate-600 hover:text-brand-accent font-medium transition-colors"
            >Projects</router-link
          >
          <router-link
            to="/woodworks"
            class="text-slate-600 hover:text-brand-accent font-medium transition-colors"
            >Woodworks</router-link
          >
          <router-link to="/contact" class="btn-primary">Get Quote</router-link>
        </div>

        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-slate-600">
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div
        v-if="mobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-slate-100 pt-4 space-y-3"
      >
        <router-link
          @click="mobileMenuOpen = false"
          to="/services"
          class="block text-slate-600 hover:text-brand-accent font-medium"
          >Services</router-link
        >
        <router-link
          @click="mobileMenuOpen = false"
          to="/projects"
          class="block text-slate-600 hover:text-brand-accent font-medium"
          >Projects</router-link
        >
        <router-link
          @click="mobileMenuOpen = false"
          to="/woodworks"
          class="block text-slate-600 hover:text-brand-accent font-medium"
          >Woodworks</router-link
        >
        <router-link
          @click="mobileMenuOpen = false"
          to="/contact"
          class="block btn-primary text-center mt-4"
          >Get Quote</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)
</script>
