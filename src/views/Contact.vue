<template>
  <div class="min-h-screen bg-white pt-20">
    <div class="section-padding">
      <div class="container-custom max-w-4xl">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-brand-dark mb-4">Start a Project</h1>
          <p class="text-slate-600">Tell me what you're building. I'll respond within 24 hours.</p>
        </div>

        <form
          action="https://formspree.io/f/xreooezy"
          method="POST"
          class="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200"
        >
          <div class="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none bg-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none bg-white"
            />
          </div>

          <select
            name="service"
            required
            class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none bg-white"
          >
            <option value="">Select a service...</option>
            <option value="web">Web Application</option>
            <option value="desktop">Desktop Software</option>
            <option value="mobile">Mobile Application</option>
            <option value="design">Graphic Design / Branding</option>
            <option value="print">Print Services</option>
            <option value="wood">Custom Woodworking</option>
          </select>

          <textarea
            name="message"
            rows="5"
            placeholder="Project details..."
            required
            class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none bg-white"
          ></textarea>

          <input type="text" name="_gotcha" style="display: none" />

          <button
            type="submit"
            class="w-full py-4 bg-brand-dark text-white rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg"
          >
            Send Request
          </button>
        </form>

        <div class="mt-12 text-center">
          <p class="text-slate-600 mb-2">Prefer email?</p>
          <a
            href="mailto:hello@mdaworks.com"
            class="text-brand-accent font-semibold hover:underline text-lg"
            >hello@mdaworks.com</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
