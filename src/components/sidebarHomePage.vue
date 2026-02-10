<template>
  <div class="min-h-screen absolute left-0 md:left-70 bg-white font-sans text-gray-800">
    <header class="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 py-3 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold text-xs">N</div>
        <h2 class="text-sm font-semibold tracking-tight">My Workspace</h2>
      </div>
      <div class="flex items-center gap-3">
        <button class="text-xs font-medium text-gray-500 hover:text-black transition">Share</button>
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition">
          Publish
        </button>
      </div>
    </header>

    <main class="max-w-5xl mx-auto px-6 py-10 md:py-16">
      
      <section class="mb-12">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-4xl">🚀</span>
          <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Welcome back, Team!
          </h1>
        </div>
        <p class="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
          Your central hub for project tracking, automation, and team collaboration. 
          Everything you need is just a click away.
        </p>
      </section>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div v-for="stat in stats" :key="stat.label" class="p-4 bg-gray-50 rounded-2xl border border-gray-100">
          <p class="text-gray-500 text-xs font-medium uppercase">{{ stat.label }}</p>
          <p class="text-2xl font-bold text-gray-900">{{ stat.value }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div v-for="i in 3" :key="i" 
             class="group p-6 border border-gray-200 rounded-2xl bg-white hover:border-blue-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
          <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            0{{ i }}
          </div>
          <h3 class="font-bold text-gray-900 text-lg">Active Project {{ i }}</h3>
          <p class="text-sm text-gray-500 mt-2">Design system and API integration for the main dashboard module.</p>
          <div class="mt-6 pt-4 border-t border-gray-50 flex justify-between items-center">
            <span class="text-[10px] font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded">IN PROGRESS</span>
            <span class="text-xs text-gray-400">2h ago</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div class="lg:col-span-2 bg-[#f9f9f9] rounded-3xl p-6 md:p-8 border border-gray-100">
          <div class="flex items-center justify-between mb-8">
            <h3 class="font-bold text-2xl text-gray-900">Recent Tasks</h3>
            <button class="text-blue-600 hover:underline text-sm font-bold">+ New Task</button>
          </div>
          
          <div class="space-y-3">
            <div v-for="(task, index) in tasks" :key="index" 
                 class="group flex items-center bg-white p-4 rounded-xl border border-transparent hover:border-gray-200 transition shadow-sm">
              <input type="checkbox" class="mr-4 h-5 w-5 rounded border-gray-300 accent-blue-600 cursor-pointer">
              <span class="text-gray-700 font-medium text-sm md:text-base">{{ task }}</span>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
          <h3 class="font-bold text-lg mb-6 text-gray-900">Team Activity</h3>
          <div class="space-y-6">
            <div v-for="n in 3" :key="n" class="flex gap-3">
              <div class="w-8 h-8 rounded-full bg-gray-200 shrink-0"></div>
              <div>
                <p class="text-xs text-gray-800"><span class="font-bold">User {{n}}</span> updated the roadmap.</p>
                <p class="text-[10px] text-gray-400 mt-1">15 mins ago</p>
              </div>
            </div>
          </div>
          <button class="w-full mt-8 py-2 text-xs font-bold text-gray-400 border border-gray-100 rounded-lg hover:bg-gray-50 transition">
            View All Activity
          </button>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
const stats = [
  { label: "Total Projects", value: "12" },
  { label: "Active Tasks", value: "48" },
  { label: "Completed", value: "85%" },
  { label: "Team Members", value: "06" },
];

const tasks = [
  "Update project roadmap for Q3",
  "Review AI agent automation flow",
  "Design new landing page components",
  "Team sync meeting at 2:00 PM",
  "Fix mobile responsive bugs",
  "Upload assets to shared drive"
];
</script>