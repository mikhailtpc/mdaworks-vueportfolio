<template>
  <div class="min-h-screen bg-slate-50 pt-20">
    <div class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Selected Projects</h1>
          <p class="text-slate-600">Recent work across web, mobile, and design.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="i in 6"
            :key="i"
            class="bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-center"
          >
            <div
              class="w-full h-48 bg-slate-200 rounded-lg mb-4 flex items-center justify-center text-slate-400"
            >
              Project {{ i }}
            </div>
            <h3 class="font-bold text-lg mb-2">Project Title</h3>
            <p class="text-slate-600 text-sm">Description coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
