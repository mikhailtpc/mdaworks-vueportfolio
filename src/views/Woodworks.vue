<template>
  <div class="min-h-screen bg-amber-50/30 pt-20">
    <div class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-12">
          <span
            class="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent text-sm font-bold rounded-full mb-4"
            >THE CRAFT</span
          >
          <h1 class="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Digital Precision, Physical Form
          </h1>
          <p class="text-slate-600 max-w-2xl mx-auto">
            Lessons in patience and precision from the workshop to the codebase.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="piece in pieces"
            :key="piece.name"
            class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="h-64 bg-gradient-to-br from-amber-100 to-amber-300 relative overflow-hidden"
            >
              <div
                class="absolute inset-0 flex items-center justify-center text-amber-800/50 font-bold"
              >
                {{ piece.name }}
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-bold text-xl text-brand-dark">{{ piece.name }}</h3>
                <span
                  class="text-xs font-semibold text-brand-accent bg-brand-accent/10 px-2 py-1 rounded"
                  >{{ piece.wood }}</span
                >
              </div>
              <p class="text-slate-600 text-sm mb-4">{{ piece.desc }}</p>
              <div class="text-xs text-slate-500">{{ piece.time }} • {{ piece.finish }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const pieces = [
  {
    name: 'Minimalist Desk Organizer',
    wood: 'Walnut',
    desc: 'Clean lines with hidden compartments for cable management.',
    time: '12 hours',
    finish: 'Danish Oil',
  },
  {
    name: 'Tablet Stand',
    wood: 'White Oak',
    desc: 'Adjustable angle stand with book-matched grain pattern.',
    time: '8 hours',
    finish: 'Shellac & Wax',
  },
  {
    name: 'Business Card Holder',
    wood: 'Cherry',
    desc: 'Desktop accessory with brass accents.',
    time: '4 hours',
    finish: 'Tung Oil',
  },
]
</script>
