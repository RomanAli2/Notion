<template>
  <div class="min-h-screen absolute left-0 md:left-70 bg-[#fcfcfc]  font-sans text-gray-800 pb-20">
    
    <header class="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3">
         
          <h2 class="text-sm font-bold tracking-tight text-gray-900 hidden sm:block">Notion Workspace</h2>
        </div>
        
        <div class="flex items-center gap-4">
          <div class="hidden md:flex bg-gray-100 rounded-full px-4 py-1.5 items-center gap-2">
            <span class="text-gray-400">🔍</span>
            <input type="text" placeholder="Search workspace..." class="bg-transparent text-xs outline-none w-40" />
          </div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-xs font-bold transition-all shadow-md">
            + Create New
          </button>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-6 mt-10">
      
      <section class="mb-12">
        <h1 class="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4">
          Welcome back, Team! 🚀
        </h1>
        <p class="text-gray-500 text-lg max-w-2xl leading-relaxed">
          Here's what's happening today. You have <span class="text-blue-600 font-bold">3 meetings</span> and <span class="text-blue-600 font-bold">5 pending tasks</span>.
        </p>
      </section>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div class="lg:col-span-8 space-y-10">
          
          <div>
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-xl font-bold flex items-center gap-2">📂 Active Projects</h3>
              <button class="text-xs text-blue-600 font-bold hover:underline">View All</button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="i in 4" :key="i" 
                   class="bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">0{{i}}</div>
                  <span class="text-[10px] font-bold px-2 py-1 rounded bg-green-50 text-green-600">ACTIVE</span>
                </div>
                <h4 class="font-bold text-gray-900 mb-2">Internal Dashboard v{{i}}.0</h4>
                <p class="text-sm text-gray-500 mb-6">Optimizing the core user experience and flow.</p>
                <div class="flex -space-x-2">
                  <div v-for="u in 3" :key="u" class="w-7 h-7 rounded-full border-2 border-white bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-4xl p-8 border border-gray-100 shadow-sm">
            <h3 class="text-xl font-bold mb-6">✅ Recent Tasks</h3>
            <div class="space-y-3">
              <div v-for="(task, index) in tasks" :key="index" 
                   class="flex items-center bg-gray-50/50 p-4 rounded-2xl hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all">
                <input type="checkbox" class="mr-4 h-5 w-5 rounded-full border-gray-300 accent-blue-600">
                <span class="text-gray-700 font-medium text-sm">{{ task }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 space-y-8">
          
          <div class="bg-blue-900 text-white rounded-4xl p-8 shadow-2xl relative overflow-hidden">
            <div class="relative z-10">
              <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
                🗓️ Upcoming Meetings
              </h3>
              <div class="space-y-6">
                <div v-for="(meeting, mIdx) in meetings" :key="mIdx" class="border-l-2 border-blue-400 pl-4 py-1">
                  <p class="text-[10px] font-bold text-blue-300 uppercase tracking-widest">{{ meeting.time }}</p>
                  <h4 class="font-bold text-sm mt-1">{{ meeting.title }}</h4>
                  <div class="flex items-center gap-2 mt-2">
                    <div class="w-5 h-5 rounded-full bg-blue-700 text-[8px] flex items-center justify-center border border-blue-500">
                      {{ meeting.attendees }}
                    </div>
                    <span class="text-[10px] text-blue-200">With {{ meeting.partner }}</span>
                  </div>
                </div>
              </div>
              <button class="w-full mt-8 py-3 bg-blue-500/20 hover:bg-blue-500/40 border border-blue-400/30 rounded-2xl text-xs font-bold transition">
                Join Meeting Room
              </button>
            </div>
            <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-800 rounded-full blur-3xl opacity-50"></div>
          </div>

          <div class="bg-white rounded-4xl p-8 border border-gray-100 shadow-sm">
            <h3 class="font-bold text-lg mb-6">Recent Activity</h3>
            <div class="space-y-6">
              <div v-for="n in 3" :key="n" class="flex gap-4">
                <div class="w-10 h-10 rounded-2xl bg-gray-100 shrink-0 flex items-center justify-center text-lg">
                  {{ ['🎨', '📄', '💬'][n-1] }}
                </div>
                <div>
                  <p class="text-xs text-gray-900 leading-tight">
                    <span class="font-bold">Team Member {{n}}</span> updated the 
                    <span class="text-blue-600 font-medium">Design Docs</span>
                  </p>
                  <p class="text-[10px] text-gray-400 mt-1">Just now</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const tasks = [
  "Finalize the Q3 strategic roadmap",
  "Review AI automation agent flow",
  "Design system audit for mobile",
  "Team sync on project velocity",
  "Prepare presentation for investors",
  "Refactor the API authentication layer",
  "Audit user permissions & roles"
];

const meetings = [
  { time: "10:00 AM - 11:00 AM", title: "Daily Team Standup", attendees: "12", partner: "Engineering" },
  { time: "01:30 PM - 02:30 PM", title: "Product Sync: Q4 Goals", attendees: "05", partner: "Design" },
  { time: "04:00 PM - 05:00 PM", title: "Client Review: Dashboard v2", attendees: "03", partner: "Stakeholders" }
];
</script>

<style scoped>
/* Scrolled behavior setup */
header {
  transition: all 0.3s ease;
}
</style>