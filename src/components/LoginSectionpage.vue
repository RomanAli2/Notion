<template>

    <div class="flex-col items-center mt-10 md:mt-20 text-center flex justify-center">
        <span class="text-3xl"><i class="fa-brands fa-notion"></i></span>
        <span><br>
            <h1 class="text-lg md:text-3xl font-medium">Your AI workspace.</h1>
            <h2 class="md:text-2xl text-lg text-slate-400">Log in to your Notion account</h2>
        </span><br>
        <div class="flex flex-col gap-1">
<div class="mt-3 flex flex-col gap-3">
  <button
    class="flex items-center gap-3 w-49 md:w-78 px-4 py-3 text-sm md:text-xl
           rounded-lg shadow shadow-slate-400
           hover:bg-slate-100 transition"
  >
    <i class="fa-brands fa-google text-xl"></i>
    <span>Login with Google</span>
  </button>

  <button class="flex items-center gap-3 w-49 md:w-78 px-4 py-3 text-sm md:text-xl
                 rounded-lg shadow shadow-slate-400 hover:bg-slate-100 transition">
    <i class="fa-brands fa-apple text-xl"></i>
    <span>Login with Apple</span>
  </button>

  <button class="flex items-center gap-3 w-49 md:w-78 px-4 py-3 text-sm md:text-xl
                 rounded-lg shadow shadow-slate-400 hover:bg-slate-100 transition">
    <i class="fa-brands fa-microsoft text-xl"></i>
    <span>Login with Microsoft</span>
  </button>

  <button class="flex items-center gap-3 w-49 md:w-78 px-4 py-3 text-sm md:text-xl
                 rounded-lg shadow shadow-slate-400 hover:bg-slate-100 transition">
    <i class="fa-solid fa-key text-xl"></i>
    <span>Login with Passkey</span>
  </button>

  <button class="flex items-center gap-3 w-49 md:w-78 px-4 py-3 text-sm md:text-xl
                 rounded-lg shadow shadow-slate-400 hover:bg-slate-100 transition">
    <i class="fa-regular fa-building text-xl"></i>
    <span>Login with SSO</span>
  </button>

  <button class="flex items-center gap-3 w-49 md:w-78 px-4 py-3 text-sm md:text-xl
                 rounded-lg shadow shadow-slate-500 hover:bg-slate-100 transition">
    <i class="fa-solid fa-envelope text-xl"></i>
    <span>Login with Email</span>
  </button>
</div>

<div class="flex  mt-2 md:mt-3 gap-1 md:gap-2 flex-wrap">
   
</div>
        </div>
<br>
        <div class="text-slate-500 text-xs md:text-xl ">
            For Demo Enter this Email <b>notion009@gmail.com</b>
        </div><br>
        <div class="flex flex-col mt-3">
            <input v-model="UserEmail" class="md:w-115 w-70 p-2 py-2 outline outline-slate-500 rounded-md" placeholder="Enter email" type="email">
       <button @click="LoginBtn" class="md:w-115 w-70 py-2 mt-4 p-2 hover:bg-blue-600 bg-blue-500 text-white text-center rounded-md">Enter</button>
        </div>
    </div>
    

</template>
<script setup>
import { router } from '../router';
import { ref } from 'vue';
const UserEmail=ref("");
function DashboardGo(){
  router.push("Dashboardpage")
}
function LoginBtn(){
  if(UserEmail.value==="notion009@gmail.com"){
  DashboardGo()
}
else if(UserEmail.value===""){
  alert("Please Enter Email")
}
else{
  alert(`${UserEmail.value} is Invalid Email`)
}
}
</script>