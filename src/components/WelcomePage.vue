<template>
   <div class="flex-1 absolute  left-0 md:left-80 overflow-y-auto bg-white">
     
     <header class="h-11 flex items-center justify-between px-4 sticky top-0 bg-white/80 backdrop-blur-md z-10">
       <div class="flex items-center gap-2 text-sm text-gray-500">
    
         <span>/</span>
         <span class="text-gray-800 font-medium">Welcome to Notion</span>
       </div>
       <div class="flex items-center gap-3 text-sm text-gray-500">
         <button class="hover:bg-gray-100 px-2 py-1 rounded transition">Share</button>
         <button class="hover:bg-gray-100 p-1.5 rounded transition">💬</button>
         <button class="hover:bg-gray-100 p-1.5 rounded transition">⭐️</button>
       </div>
     </header>
 
     <div class="max-w-3xl mx-auto px-8 pt-20 pb-40">
       
       <div class="group relative mb-6">
         <div class="text-7xl mb-4 cursor-default select-none">👋</div>
         <h1 class="text-4xl md:text-5xl font-bold text-[#37352f] tracking-tight outline-none" contenteditable="true">
           Welcome to Notion
         </h1>
       </div>
 
       <div class="flex flex-wrap gap-4 mb-10 border-b border-gray-100 pb-8">
         <button class="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-100 transition">
           <span>✨</span> Help me write
         </button>
         <button class="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-100 transition">
           <span>🖼️</span> Add cover
         </button>
         <button class="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-100 transition">
           <span>😊</span> Add icon
         </button>
       </div>
 
       <div class="space-y-6">
         <p class="text-lg text-[#37352f] leading-relaxed italic opacity-60">
           Press '/' for commands, or start typing to capture your thoughts...
         </p>
 
         <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
           <div class="p-4 border hover:bg-slate-100 border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition group">
             <h3 class="font-semibold mb-1 flex items-center gap-2">
               <span>🚀</span> Getting Started
             </h3>
             <p class="text-sm text-gray-500">Learn the basics of how Notion works.</p>
           </div>
           <div class="p-4 border hover:bg-slate-100 border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition">
             <h3 class="font-semibold mb-1 flex items-center gap-2">
               <span>📂</span> Project Management
             </h3>
             <p class="text-sm text-gray-500">Organize your tasks and deadlines easily.</p>
           </div>
         </div>
       </div>
 
     </div>
   </div>
 </template>