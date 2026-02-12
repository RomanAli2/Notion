<template>

    <div class="flex-col items-center mt-13 md:mt-25 text-center flex justify-center">
        <span class="text-3xl"><i class="fa-brands fa-notion"></i></span>
        <span><br>
            <h1 class="text-lg md:text-3xl font-medium">Your AI workspace.</h1>
            <h2 class="md:text-2xl text-lg text-slate-400">Log in to your Notion account</h2>
        </span><br>
        <div class="flex flex-col gap-1">
<div class="grid grid-cols-2  md:grid-cols-3 mt-3 gap-2 ">
    <span class="md:w-38 w-29 py-2 text-xl rounded-lg hover:bg-slate-100 hover:cursor-pointer shadow shadow-slate-400">
        <h1><i class="fa-brands fa-google"></i></h1>
        <p>Google</p>
    </span>
     <span class="md:w-38 w-29 py-2 text-xl rounded-lg hover:bg-slate-100 hover:cursor-pointer shadow shadow-slate-400">
        <h1><i class="fa-brands fa-apple"></i></h1>
        <p>Apple</p>
    </span>
     <span class="md:w-38 w-29 py-2 text-xl rounded-lg hover:bg-slate-100 hover:cursor-pointer shadow shadow-slate-400">
        <h1><i class="fa-brands fa-microsoft"></i></h1>
        <p>Microsoft</p>
    </span>
     <span class="md:w-38 w-29 py-2 text-xl rounded-lg hover:bg-slate-100 hover:cursor-pointer shadow shadow-slate-400">
        <h1><i class="fa-solid fa-key"></i></h1>
        <p>Passkey</p>
    </span>
     <span class="md:w-38 w-29 py-2 text-xl rounded-lg hover:bg-slate-100 hover:cursor-pointer shadow shadow-slate-400">
        <h1><i class="fa-regular fa-building"></i></h1>
        <p>SSO</p>
    </span>
     <span class="md:w-38 w-29 py-2 text-xl rounded-lg hover:bg-slate-100 hover:cursor-pointer shadow shadow-slate-400">
        <h1><i class="fa-solid fa-envelope"></i></h1>
        <p>Email</p>
    </span>
</div>
<div class="flex mt-3 gap-2 flex-wrap">
   
</div>
        </div>
<br>
        <div class="text-slate-500 text-xs md:text-xl ">
            For Demo Enter this Email <b>notion009@gmail.com</b>
        </div><br>
        <div class="flex flex-col mt-3">
            <input v-model="UserEmail" class="md:w-115 w-70 p-2 py-2 outline outline-slate-500 rounded-lg" placeholder="Enter email" type="email">
       <button @click="LoginBtn" class="md:w-115 w-70 py-2 mt-4 p-2 hover:bg-blue-600 bg-blue-500 text-white text-center rounded-xl">Enter</button>
        </div>
    </div>
    

</template>
<script setup>
import { router } from '../router';
import { ref } from 'vue';
const UserEmail=ref("");
function DashboardGo(){
router.push("/DashboardPage/sidebarHomePage")
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