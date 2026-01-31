<template>
<header class="fixed top-0 left-0 w-full h-20 bg-white shadow-slate-300 shadow">
    <nav class="flex items-center justify-between p-3 m-2   ">
        <!--Logo-->
        <div class="logo text-5xl "><i class="fa-brands fa-notion"></i></div>
        <div class="flex gap-1 md:gap-3">
<button @click="LoginPage"  class="px-3 rounded-md text-xl hover:cursor-pointer font-medium py-1 hidden md:block  hover:bg-slate-100 ">Log in</button>
<button @click="Notionfree" class="md:px-5 md:py-3 px-3 py-1 rounded-md text-sm md:text-xl font-medium bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white">Get Notion Free</button>
<button @click="trogelmodebtn" class="md:text-3xl text-2xl px-3 py-1.5 font-light rounded-md hover:cursor-pointer hover:bg-slate-100"><i :class="trogelmode?'fa-solid fa-xmark':'fa-solid fa-bars'"></i></button>
        </div>
    </nav>
</header>
<div class="animation transition-all top-20 w-full fixed bg-white " v-if="trogelmode">
<div class="" >
    <div class="flex flex-col justify-start gap-2 md:gap-7 m-2 p-8 font-medium text-3xl">
        <h1>Products<i class="fa-solid fa-angle-down text-xl"></i></h1>
        <h1>AI<i class="fa-solid fa-angle-down text-xl"></i></h1>
        <h1>Solutions<i class="fa-solid fa-angle-down text-xl"></i></h1>
        <h1>Resources<i class="fa-solid fa-angle-down text-xl"></i></h1>
        <h1>Enterprise</h1>
         <h1>Pricing</h1>
    </div>
</div><br class="hidden md:block">
<div class="text-end " >

    
<div class="bg-slate-200/95 md:items-center  m-4 flex-col md:flex-row   md:gap-80 gap-0   flex items-start w-auto h-50 md:h-50 rounded-3xl">
    <div class="flex gap-2 items-center m-4 "><span class="text-2xl md:text-7xl p-2 rounded-xl  bg-white"><i class="fa-brands fa-notion"></i></span>
    <span><h1 class=" text-lg text-start md:text-2xl hover:underline hover:cursor-pointer font-medium">Notion</h1>
    <p class="hidden md:block">Your AI Workspace</p>
    </span>
    </div>
    <div class="flex flex-col gap-3 m-4">
     <div class="flex gap-2 items-center"><span class="text-2xl p-2 rounded-xl  bg-white"><i class="fa-regular fa-calendar"></i></span>
    <span><h1 class=" text-lg  hover:underline hover:cursor-pointer font-medium">Notion Celender</h1>
    </span>
    </div>
     <div class="flex gap-2 items-center "><span class="text-2xl p-2 rounded-xl  bg-white"><i class="fa-regular fa-paper-plane"></i></span>
    <span><h1 class=" text-lg hover:underline hover:cursor-pointer font-medium">Notion Mail</h1>
    </span>
    </div>
    </div>
</div><br><br class="hidden md:block">
<hr class="text-slate-300">
<div class="m-2 flex flex-wrap justify-center gap-0.5 md:gap-2">
<button class="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-xl text-white px-8 py-2 w-140 rounded-xl"><a href="https://www.notion.com/download">Download App</a></button>
<button @click="LoginPage" class=" hover:bg-slate-300 hover:cursor-pointer text-xl text-blue-500 bg-slate-200 px-8 py-2 w-140 rounded-xl">Log in</button>
</div>
</div>
</div>

</template>
<script setup>
import { ref } from 'vue';
import { router } from '../router';
import { RouterLink } from 'vue-router';

const trogelmode=ref(false)
function trogelmodebtn(){
    trogelmode.value=!trogelmode.value
}
function Notionfree(){
     router.push('/notionfree')
}
function LoginPage(){
    router.push('/LoginSectionpage')
}
</script>