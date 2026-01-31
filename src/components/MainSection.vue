<template>
<section class="mt-12"><br>
    <div class="text-center flex justify-center">
        <img class="w-auto md:w-250 p-4" src="/images/homepage-hero-animation-lf.avif" alt="">
    </div>
      <div class="text-center flex-col justify-center">
        <span class="text-3xl sm:text-5xl md:text-7xl font-bold">
            <h1>One workspace.</h1>
            <h1>Zero busywork.</h1>
        </span>
        <span class="md:text-2xl flex justify-center text-lg  mt-5 ">
            <p class="md:w-180 w-90">Notion is where your teams and AI agents capture knowledge, find answers, and automate projects. Now a team of 7 feels like 70.</p>
        </span>
        <span class="p-2 flex-wrap gap-3 flex justify-center">
            <button @click="Notionfree" class="px-5 cursor-pointer py-2 md:px-9 md:py-3.5 text-md md:text-lg  font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg">Get Notely free</button>
            <button class="px-5 py-2 md:px-9 md:py-3.5 text-md md:text-lg font-medium bg-slate-200 text-blue-500 hover:bg-slate-300 rounded-lg">Request a demo</button>
        </span>
    </div>
</section><br>
<section>
   <div class="flex justify-center px-4 md:px-2">
  <video
    class="w-full max-w-md md:max-w-5xl rounded-lg shadow-lg shadow-slate-400"
    autoplay
    muted
    loop
    src="/videos/Desktop_HomepageHero_compressed_v007_650.mp4"
  ></video>
</div><br>
<div class="flex justify-center gap-9 md:gap-15 items-center bg-slate-100/50 py-5 px-8 rounded-lg flex-wrap">
    <span class="text-xl"><h1>Trusted by top teams</h1></span>
   <div class="flex text-3xl flex-wrap justify-center font-medium gap-3">
     <span class="hover:bg-slate-200 px-2.5 py-1 rounded-lg cursor-pointer"><a href="https://www.notion.com/customers/figma">Figma</a></span>
    <span class="hover:bg-slate-200 px-2.5 py-1 rounded-lg cursor-pointer"><a href="https://www.notion.com/customers/openai">OpenAI</a></span>
    <span class="hover:bg-slate-200 px-2.5 py-1 rounded-lg cursor-pointer"><a href="https://www.notion.com/customers/ramp">ramp</a></span>
    <span class="hover:bg-slate-200  px-2.5 py-1 rounded-lg cursor-pointer"><a href="https://www.notion.com/customers/cursor">Cursor</a></span>
    <span class="hover:bg-slate-200  px-2.5 py-1 rounded-lg cursor-pointer"><a href="https://www.notion.com/customers/vercel">Vercal</a></span>
   </div>
</div>
</section><br><br>
<section>
  
    <div class="flex flex-col justify-center items-center ">
        <h1 class="text-2xl md:text-5xl text-center font-medium">More productivity. <br> Fewer tools.</h1>
   <p class="text-md md:text-2xl text-center mt-2">Bring all your tools and teams under one roof. <br> Calculate savings below.</p>
    </div><br>
    
    <div class="flex  flex-col justify-center items-center">
    <div class="flex justify-around py-3 flex-wrap rounded-lg md:w-270 m-3 md:m-0  w-auto shadow-lg shadow-slate-300 border border-slate-300 gap-9">
        <div class="flex flex-col mt-9 gap-4">
            <span  class="flex items-center"><input  @change="myFunc" class="w-10 h-4" type="checkbox"><h1 class="font-medium text-lg">AI Search</h1></span>
             <span class="flex items-center"><input  @change="myFunc" class="w-10 h-4" type="checkbox"><h1 class="font-medium text-lg">AI Chatbot</h1></span>
              <span class="flex items-center"><input  @change="myFunc" class="w-10 h-4" type="checkbox"><h1 class="font-medium text-lg">AI Meeting Notes</h1></span>
               <span class="flex items-center"><input  @change="myFunc" class="w-10 h-4" type="checkbox"><h1 class="font-medium text-lg">AI Writing Assistant</h1></span>
                <span class="flex items-center"><input  @change="myFunc" class="w-10 h-4" type="checkbox"><h1 class="font-medium text-lg">AI Email App</h1></span>
                <span class="flex items-center"><input  @change="myFunc" class="w-10 h-4" type="checkbox"><h1 class="font-medium text-lg">
AI Research</h1></span>
                <span class="flex items-center"><input  @change="myFunc" class="w-10 h-4" type="checkbox"><h1 class="font-medium text-lg">Calendar Scheduling</h1></span>
        </div>
        <div class="flex flex-col  mt-9 gap-5">
            <span> <h1 class="text-lg md:text-2xl font-medium">Team Size</h1>
            <input type="number" class="px-1 mt-2 font-bold text-sm md:text-xl py-1.5 border border-slate-600 rounded-md" placeholder="10">
            </span><br>
            <span class="text-md md:text-xl  font-bold">
                <h1 class="text-start">Monthly Annual savings</h1>
                <h3 class="text-2xl">${{ MonthlySaving }}</h3>
            </span>
             <span class="md:text-xl text-md  font-bold">
                <h1 class="text-start">Annual savings </h1>
                <h3 class="text-2xl">${{ Annualsavings }}</h3>
            </span><br>
        </div>
    </div>
  </div>
</section><br>
<section class="bg-slate-100 p-2">
    <div class="flex items-center  justify-center flex-col">
        <h1 class="text-lg md:text-3xl p-3 font-medium">Trusted by teams that ship.</h1>
    </div><br>
    <div class="bg-white flex-wrap gap-4 md:gap-1  rounded-xl flex justify-around w-auto m-6 items-center p-5">
        <div class="order-last  md:order-first"><h1 class="text-xl font-medium md:text-3xl">OpenAI</h1><br>
        <h3 class="text-md md:text-xl font-medium ">There’s power in a single platform<br> where you  can do all your work. <br> Notion is that single place.</h3>
        <a class="text-blue-400 mt-3 hover:underline font-medium text-lg" href="https://www.notion.com/customers/openai">Read the full story</a>
        </div>
        <div class="items-center ">
            <img class="rounded-xl md:w-80 w-65 p-2 md:p-0 h-40 md:h-50" src="/images/image.avif" alt="">
        </div>
    </div><br>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 justify-items-center ">
        <div class="bg-white rounded-lg p-3 md:p-0 w-full md:w-80 ">
            <div class="m-2">
                <h1 class="text-lg md:text-2xl p-2 text-red-600 font-medium ">TOYATA</h1>
            <h3 class="text-start p-3">Streamlined workflows to reduce timelines by 3x.</h3>
            </div>
        </div>
     <div class="bg-white rounded-lg p-3 md:p-0 w-full md:w-80 ">
            <div class="m-2">
                <h1 class="text-lg md:text-2xl p-2  font-medium ">ramp</h1>
            <h3 class="text-start p-3">With Notion, every person at Ramp has an AI agent.</h3>
            </div>
        </div>
          <div class="bg-white rounded-lg p-3 md:p-0 w-full md:w-80 ">
            <div class="m-2">
                <h1 class="text-lg md:text-2xl p-2  font-medium ">Vercal</h1>
            <h3 class="text-start p-3">Notion understands that you can solve a lot of problems with one tool.</h3>
            </div>
        </div>
         <div class="bg-white rounded-lg p-3 md:p-0 w-full md:w-80 ">
            <div class="m-2">
                <h1 class="text-lg md:text-2xl p-2  font-medium ">MatchGroup</h1>
            <h3 class="text-start p-3">Notion understands that you can solve a lot of problems with one tool.this is Match group</h3>
            </div>
        </div>
         <div class="bg-white rounded-lg p-3 md:p-0 w-full md:w-80 ">
            <div class="m-2">
                <h1 class="text-lg md:text-2xl p-2  font-medium ">Cursor</h1>
            <h3 class="text-start p-3">With Notion, every person at Cursor has an AI agent.</h3>
            </div>
        </div>
          <div class="bg-white rounded-lg p-3 md:p-0 w-full md:w-80 ">
            <div class="m-2">
                <h1 class="text-lg md:text-2xl p-2  font-medium ">Figma</h1>
            <h3 class="text-start p-3">With Notion, every person at Figma has an Design agent.</h3>
            </div>
        </div>
    </div>
</section><br>
</template>
<script setup>
import { ref } from 'vue';
import { router } from '../router';
function Notionfree(){
     router.push('/notionfree')
}
const MonthlySaving=ref(113)
const Annualsavings=ref(6555);

 function myFunc() {
    MonthlySaving.value+=29
Annualsavings.value+=120
}
</script>