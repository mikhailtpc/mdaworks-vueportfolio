<template>
  <NavBar />
  <router-view />
  <footer class="bg-brand-dark text-slate-400 py-12 border-t border-slate-800">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div class="col-span-2">
          <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <span
              class="w-6 h-6 bg-brand-accent rounded flex items-center justify-center text-white text-xs"
              >M</span
            >
            MDA Works
          </h3>
          <p class="text-sm mb-4 max-w-sm">
            Digital craftsmanship for the modern business. From web applications to custom
            woodworking.
          </p>
          <p class="text-xs text-slate-500">© 2026 MDA Works. All rights reserved.</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link to="/services" class="hover:text-brand-accent transition-colors"
                >Web Development</router-link
              >
            </li>
            <li>
              <router-link to="/services" class="hover:text-brand-accent transition-colors"
                >Desktop Apps</router-link
              >
            </li>
            <li>
              <router-link to="/services" class="hover:text-brand-accent transition-colors"
                >Mobile Development</router-link
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="mailto:hello@mdaworks.com" class="hover:text-brand-accent transition-colors"
                >hello@mdaworks.com</a
              >
            </li>
            <li>
              <a href="https://github.com" class="hover:text-brand-accent transition-colors"
                >GitHub</a
              >
            </li>
            <li>
              <a href="https://linkedin.com" class="hover:text-brand-accent transition-colors"
                >LinkedIn</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>
