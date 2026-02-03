<template>
  <div v-if="trogelmode"  class="absolute left-0 top-0 w-70    h-screen flex flex-col items-center text-start border-r-slate-400 border-r shadow shadow-slate-400 overflow-hidden  overflow-y-scroll bg-slate-100">
    <div class="p-2 text-xl flex flex-col mt-2 gap-3">
        <span class=" cursor-pointer text-xl font-medium md:text-2xl"><h1 class="text-xl hover:bg-slate-200 px-9 py-2 rounded-lg text-slate-600"><i class="fa-brands fa-notion mr-2"></i>Notion Space's</h1></span>
       <div class="flex flex-col gap-1">
         <span class="  cursor-pointer"><h1 class=" hover:bg-slate-200 px-5 py-2 rounded-lg text-slate-600"><i class="fa-solid fa-magnifying-glass mr-2"></i>Search Infomation</h1></span>

         <span class="  cursor-pointer"><h1 class=" hover:bg-slate-200 px-5 py-2 rounded-lg text-slate-600"><i class="fa-solid fa-home mr-2"></i>Home Page</h1></span>

          <span class="  cursor-pointer"><h1 class=" hover:bg-slate-200 px-5 py-2 rounded-lg text-slate-600"><i class="fa-solid fa-handshake mr-2"></i>Meetings</h1></span>

          
          <span class="  cursor-pointer"><h1 class=" hover:bg-slate-200 px-5 py-2 rounded-lg text-slate-600"><i class="fa-solid fa-user-astronaut mr-2"></i>Notion AI</h1></span>
          
          <span class="  cursor-pointer"><h1 class=" hover:bg-slate-200 px-5 py-2 rounded-lg text-slate-600"><i class="fa-solid fa-inbox mr-2"></i>Inbox</h1></span>
       </div>
       <div class="">
         <span class="text-xl md:text-2xl"><h1 class="text-xl  px-9 py-2 rounded-lg text-slate-500">Private</h1></span>
        <div class="flex flex-col gap-1 ">
<span v-for="items in privateDiv" @click="items.action()" class="text-lg cursor-pointer md:text-xl">
    <h1 class=" hover:bg-slate-200 px-5 py-2 rounded-lg bg-slate-100 text-slate-600"><i :class="items.icon"  class="mr-2 text-xl"></i>{{ items.title }}</h1>
</span>
        </div>
       </div>
         <div class="">
         <span class="text-xl md:text-2xl"><h1 class="text-xl  px-9 py-2 rounded-lg text-slate-500">Teamspace</h1></span>
        <div class="flex flex-col gap-1 ">
<span v-for="items in TeamSpaceDiv"  class="text-lg cursor-pointer md:text-xl">
    <h1 class=" hover:bg-slate-200 px-5 py-2 rounded-lg bg-slate-100 text-slate-600"><i :class="items.icon"  class="mr-2 text-xl"></i>{{ items.title }}</h1>
</span>
        </div>
       </div>
        <div class="">
         <span class="text-xl md:text-2xl"><h1 class="text-xl  px-9 py-2 rounded-lg text-slate-500">Notion Apps</h1></span>
        <div class="flex flex-col gap-1 ">
<span v-for="items in notionApps"  class="text-lg cursor-pointer md:text-xl">
    <h1 class=" hover:bg-slate-200 px-5 py-2 rounded-lg bg-slate-100 text-slate-600"><i :class="items.icon"  class="mr-2 text-xl"></i>{{ items.title }}</h1>
</span>
        </div>
       </div>
        <div class="">
         
        <div class="flex flex-col gap-1 ">
<span v-for="items in EndProcess"  class="text-lg cursor-pointer md:text-xl">
    <h1 class=" hover:bg-slate-200 px-5 py-2 rounded-lg bg-slate-100 text-slate-600"><i :class="items.icon"  class="mr-2 text-xl"></i>{{ items.title }}</h1>
</span>
        </div>
       </div>
    </div>
</div>
  <div class="block md:hidden absolute " :class="trogelmode?'right-0.5':'left-0.5'">
        <button @click="trogelmodebtn" class="z-50 hover:bg-slate-200 m-2 cursor-pointer px-2 py-1 rounded-lg">
            <i :class="trogelmode?'fa-solid fa-xmark':'fa-solid fa-bars'"></i>
        </button>
    </div>

</template>
<script setup>
import Notionfree from './notionfree.vue';
import { ref,onMounted } from 'vue';
const privateDiv=[
    {icon:"fa-solid fa-hand",title:"Welcome to Notion"},
    {icon:"fa-solid fa-plus",title:"Add new", action:AddPrivate}
]
const TeamSpaceDiv=[
    {icon:"fa-solid fa-home",title:"Notion Space's HQ"
    },
    {icon:"fa-solid fa-plus",title:"Add new", }
]
const notionApps=[
    {icon:"fa-solid fa-paper-plane",title:"Notion Mail"},
    {icon:"fa-solid fa-calendar",title:"Notion Calender"},
    {icon:"fa-brands fa-notion",title:"Notion Desktop"}
]
const EndProcess=[
    {icon:"fa-solid fa-gear",title:"Setting"},
    {icon:"fa-solid fa-shapes",title:"MarketPlace"},
    {icon:"fa-solid fa-trash-can",title:"Trash"}
]
function AddPrivate(){
    alert("Not Available")
}
const trogelmode=ref(false)
function trogelmodebtn(){
    trogelmode.value=!trogelmode.value
}
const checkScreen = () => {
  if (window.innerWidth >= 1024) {
    trogelmode.value = true
  } 
}

onMounted(() => {
  checkScreen() // page load per check
  window.addEventListener("resize", checkScreen)
})
</script>