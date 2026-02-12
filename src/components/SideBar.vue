<template>
  <div v-if="trogelmode" class="fixed left-0 top-0 z-50 w-70 backdrop-blur-lg h-screen flex flex-col items-center text-start border-r-slate-400 border-r shadow shadow-slate-400 overflow-hidden overflow-y-scroll scrollbar-thin bg-slate-100/70">
    <div class="p-2 text-xl flex flex-col mt-2 gap-3 w-full">
      
      <span class="cursor-pointer text-xl font-medium md:text-2xl px-4">
        <h1 class="text-xl hover:bg-slate-200 px-5 py-2 rounded-lg text-slate-600 italic font-bold">
          <i class="fa-brands fa-notion mr-2"></i>Notion Space's
        </h1>
      </span>

      <div class="flex flex-col gap-1 w-full px-4">
        
       <router-link 
          to="/DashboardPage/SearchSidebarPAge" 
          class="group"
          active-class="bg-blue-100 text-blue-700 font-semibold rounded-lg"
          @click="handleMobileClick"
        >
          <h1 class="px-5 py-2 rounded-lg text-lg flex items-center group-hover:bg-slate-200 transition-colors">
            <i class="fa-solid fa-magnifying-glass mr-2"></i>Search
          </h1>
        </router-link>

        <router-link 
          to="/DashboardPage/sidebarHomePage" 
          class="group"
          active-class="bg-blue-100 text-blue-700 font-semibold rounded-lg"
          @click="handleMobileClick"
        >
          <h1 class="px-5 py-2 rounded-lg text-lg flex items-center group-hover:bg-slate-200 transition-colors">
            <i class="fa-solid fa-home mr-2"></i>Home Page
          </h1>
        </router-link>

        <router-link 
          to="/DashboardPage/mettingPage" 
          class="group"
          active-class="bg-blue-100 text-blue-700 font-semibold rounded-lg"
          @click="handleMobileClick"
        >
          <h1 class="px-5 py-2 rounded-lg text-lg flex items-center group-hover:bg-slate-200 transition-colors">
            <i class="fa-solid fa-handshake mr-2"></i>Meetings
          </h1>
        </router-link>

        <router-link 
          to="/DashboardPage/NotionAIPage" 
          class="group"
          active-class="bg-blue-100 text-blue-700 font-semibold rounded-lg"
          @click="handleMobileClick"
        >
          <h1 class="px-5 py-2 rounded-lg text-lg flex items-center group-hover:bg-slate-200 transition-colors">
            <i class="fa-solid fa-user-astronaut mr-2"></i>Notion AI
          </h1>
        </router-link>

      </div>

      <div class="px-4">
        <span class="text-sm font-bold text-slate-400 uppercase tracking-wider px-5 py-2 block">Private</span>
        <div class="flex flex-col gap-1">
          <div 
            v-for="items in privateDiv" 
            :key="items.title"
            @click="items.action()" 
            class="text-lg cursor-pointer hover:bg-slate-200 px-5 py-2 rounded-lg text-slate-600 flex items-center"
          >
            <i :class="items.icon" class="mr-2 text-xl"></i>{{ items.title }}
          </div>
        </div>
      </div>

      </div>
  </div>

  <div class="block md:hidden absolute z-50 top-11" :class="trogelmode ? 'right-0.5' : 'left-0.5'">
    <button @click="trogelmodebtn" class="z-50 bg-slate-100 hover:bg-slate-200 m-2 cursor-pointer px-2 py-1 rounded-lg">
      <i :class="trogelmode ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { router } from '../router';

const trogelmode = ref(false);

const privateDiv = [
  { icon: "fa-solid fa-hand", title: "Welcome back", action: () => router.push('/DashboardPage/WelcomePage') },
  { icon: "fa-solid fa-plus", title: "Add new", action: () => alert("Not Available") }
];

// Mobile menu close karne ke liye common function
const handleMobileClick = () => {
  if (window.innerWidth < 1024) {
    trogelmode.value = false;
  }
};

const trogelmodebtn = () => {
  trogelmode.value = !trogelmode.value;
};

const checkScreen = () => {
  trogelmode.value = window.innerWidth >= 1024;
};

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
});
</script>