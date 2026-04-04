<template>
  <div>
    <!-- Hero -->
    <section class="relative min-h-screen flex items-center bg-brand-dark overflow-hidden pt-20">
      <div
        class="absolute inset-0 opacity-5"
        style="
          background-image: radial-gradient(#d97706 1px, transparent 1px);
          background-size: 40px 40px;
        "
      ></div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl">
          <p class="text-brand-accent font-semibold tracking-widest mb-4 uppercase text-sm">
            Freelance Developer & Designer
          </p>
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building digital experiences<br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-tech"
              >with artisan precision</span
            >
          </h1>
          <p class="text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
            From scalable web applications to handcrafted wooden furniture. I bring the same
            attention to detail to your SaaS product as I do to a dovetail joint.
          </p>

          <div class="flex flex-wrap gap-4 mb-12">
            <router-link to="/projects" class="btn-accent">View Portfolio</router-link>
            <router-link
              to="/contact"
              class="px-6 py-3 border-2 border-slate-600 text-white rounded-lg font-semibold hover:border-brand-accent hover:text-brand-accent transition-all"
            >
              Request Quote
            </router-link>
          </div>

          <div class="flex flex-wrap gap-3 text-sm">
            <span
              v-for="tag in tags"
              :key="tag"
              class="px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 text-slate-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Props -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow">
            <div
              class="w-12 h-12 bg-brand-tech/10 rounded-xl flex items-center justify-center mb-4 text-brand-tech"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2 text-brand-dark">Full-Stack Development</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Web, desktop, and mobile applications built with modern technologies.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow">
            <div
              class="w-12 h-12 bg-brand-print/10 rounded-xl flex items-center justify-center mb-4 text-brand-print"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01M17 16h.01"
                />
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2 text-brand-dark">Design & Print</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Brand identity, UI/UX, and professional print materials.
            </p>
          </div>

          <div
            class="p-6 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow border border-brand-accent/20"
          >
            <div
              class="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-4 text-brand-accent"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2 text-brand-dark">Custom Woodworking</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Handcrafted pieces reflecting dedication to quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const tags = [
  'Web Apps',
  'Desktop Software',
  'Mobile Development',
  'Graphic Design',
  'Print Services',
  'Woodworking',
]
</script>
