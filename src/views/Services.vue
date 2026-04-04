<template>
  <div class="min-h-screen bg-slate-50 pt-20">
    <div class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Service Spectrum</h1>
          <p class="text-slate-600 max-w-2xl mx-auto">
            Comprehensive digital solutions with the option for physical brand collateral and custom
            woodworking.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Dev Services -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-12 bg-brand-tech/10 rounded-xl flex items-center justify-center text-brand-tech"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-brand-dark">Software Development</h2>
                <p class="text-sm text-slate-500">End-to-end solutions</p>
              </div>
            </div>

            <div class="space-y-3">
              <ServiceCard
                title="Web Applications"
                description="React, Vue, Angular, ASP.NET Core, Node.js"
                price="From $2,500"
              />
              <ServiceCard
                title="Desktop Software"
                description="WPF, WinForms, Electron, cross-platform"
                price="From $3,000"
              />
              <ServiceCard
                title="Mobile Apps"
                description="React Native, Flutter, iOS/Android native"
                price="From $4,000"
              />
            </div>
          </div>

          <!-- Design Services -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-12 bg-brand-print/10 rounded-xl flex items-center justify-center text-brand-print"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-brand-dark">Design & Print</h2>
                <p class="text-sm text-slate-500">Visual identity & collateral</p>
              </div>
            </div>

            <div class="space-y-3">
              <ServiceCard
                title="Brand Identity"
                description="Logos, style guides, brand strategy"
                price="From $1,200"
                color="print"
              />
              <ServiceCard
                title="UI/UX Design"
                description="Wireframes, prototypes, user testing"
                price="From $1,500"
                color="print"
              />
              <ServiceCard
                title="Print Services"
                description="Business cards, brochures, signage"
                price="Quote"
                color="print"
              />
            </div>
          </div>

          <!-- Woodworking -->
          <div
            class="lg:col-span-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-brand-accent/20"
          >
            <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="flex-1">
                <div class="flex items-center gap-4 mb-4">
                  <div
                    class="w-12 h-12 bg-brand-accent/20 rounded-xl flex items-center justify-center text-brand-accent"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 class="text-2xl font-bold text-brand-dark">Custom Woodworking</h2>
                    <span
                      class="inline-block px-2 py-1 bg-brand-accent/20 text-brand-accent text-xs font-bold rounded mt-1"
                      >HOBBY & CRAFT</span
                    >
                  </div>
                </div>
                <p class="text-slate-700 mb-4">
                  From desk organizers to display pieces. Woodworking is my meditation practice that
                  keeps my digital work sharp.
                </p>
                <router-link to="/woodworks" class="text-brand-accent font-semibold hover:underline"
                  >View Gallery →</router-link
                >
              </div>
              <div
                class="w-full md:w-80 h-48 bg-gradient-to-br from-amber-200 to-amber-400 rounded-xl flex items-center justify-center text-amber-800 font-bold"
              >
                [Wood Image]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>
