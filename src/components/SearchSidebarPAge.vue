<template>
  <div class="max-w-2xl mx-auto mt-17 p-4">
    <div class="relative group">
      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <i class="fa-solid fa-magnifying-glass text-slate-400 group-focus-within:text-blue-500 transition-colors"></i>
      </div>
      <input 
        type="text" 
        v-model="searchQuery"
        placeholder="Search information..." 
        class="w-full bg-slate-100 border border-transparent focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl py-3 pl-12 pr-4 outline-none transition-all text-slate-700"
      />
    </div>

    <div class="mt-6 border border-slate-100 rounded-2xl bg-white shadow-sm overflow-hidden">
      <div class="px-4 py-3 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
        <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">Recent Searches</span>
        <button @click="clearRecent" class="text-xs text-blue-500 hover:underline">Clear all</button>
      </div>

      <div class="flex flex-col">
        <div 
          v-for="(item, index) in filteredResults" 
          :key="index"
          class="flex items-center justify-between px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors border-b border-slate-50 last:border-0 group"
        >
          <div class="flex items-center gap-4">
            <div class="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-white shadow-sm">
              <i :class="item.icon"></i>
            </div>
            <div>
              <p class="text-sm font-medium text-slate-700">{{ item.title }}</p>
              <p class="text-xs text-slate-400">{{ item.path }}</p>
            </div>
          </div>
          <i class="fa-solid fa-arrow-right text-slate-200 group-hover:text-blue-400 text-xs transition-transform group-hover:translate-x-1"></i>
        </div>

        <div v-if="filteredResults.length === 0" class="p-10 text-center text-slate-400">
          <i class="fa-solid fa-face-meh text-3xl mb-2"></i>
          <p>No matches found for "{{ searchQuery }}"</p>
        </div>
      </div>
    </div>

    <div class="mt-4 flex gap-4 justify-center text-[10px] text-slate-400 font-medium">
      <span><kbd class="bg-slate-100 px-1 rounded border border-slate-300">ENTER</kbd> to select</span>
      <span><kbd class="bg-slate-100 px-1 rounded border border-slate-300">↑↓</kbd> to navigate</span>
      <span><kbd class="bg-slate-100 px-1 rounded border border-slate-300">ESC</kbd> to dismiss</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchQuery = ref('');

const allData = [
  { title: 'Project Roadmap 2026', path: 'Teamspace / Engineering', icon: 'fa-solid fa-map' },
  { title: 'Meeting Notes - Feb 12', path: 'Meetings', icon: 'fa-solid fa-file-lines' },
  { title: 'Welcome to Notion', path: 'Private / Welcome', icon: 'fa-solid fa-hand' },
  { title: 'Design System', path: 'Teamspace / Design', icon: 'fa-solid fa-pen-nib' },
  { title: 'Marketplace Trends', path: 'Marketplace', icon: 'fa-solid fa-chart-line' },
];

const filteredResults = computed(() => {
  if (!searchQuery.value) return allData;
  return allData.filter(item => 
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function clearRecent() {
  // Logic to clear search history
  alert('Recent searches cleared!');
}
</script>