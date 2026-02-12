<template>
        
  <div class="bg-[#fffefc] absolute left-0 md:left-70 py-20 px-6 font-sans antialiased selection:bg-purple-100">
    <div class="max-w-5xl mx-auto text-center mb-32">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 mb-8 animate-fade-in">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span class="text-xs font-bold uppercase tracking-wider text-gray-500">New: Notion AI Agents</span>
      </div>

      <h1 class="text-6xl md:text-[92px] font-bold tracking-tighter leading-[0.9] text-[#1a1a1a] mb-10">
        Write. Plan. <br /> 
        <span class="italic font-serif text-blue-600">Organize.</span>
      </h1>

      <p class="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
        A unified workspace where your notes, documents, and projects live together. Enhanced with AI that actually understands your context.
      </p>

     
    </div>

    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-3 gap-8">
        
        <div class="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group">
          <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:rotate-6 transition-transform">📖</div>
          <h3 class="text-2xl font-bold mb-4">Centralized Wiki</h3>
          <p class="text-gray-600 leading-relaxed">Stop searching through endless folders. Build a beautiful, searchable home for all your company knowledge and policies.</p>
          <ul class="mt-6 space-y-3 text-sm text-gray-400 font-medium">
            <li>• Unlimited sub-pages</li>
            <li>• Real-time collaboration</li>
            <li>• Cross-link everything</li>
          </ul>
        </div>

        <div class="p-8 rounded-3xl bg-linear-to-b from-purple-50 to-white border border-purple-100 shadow-sm hover:shadow-xl transition-all group">
          <div class="w-14 h-14 bg-purple-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">✨</div>
          <h3 class="text-2xl font-bold mb-4">Notion AI</h3>
          <p class="text-gray-600 leading-relaxed">An integrated assistant that helps you write faster, summarize long docs, and find answers in seconds without leaving the page.</p>
          <div class="mt-6 p-3 bg-white/50 rounded-lg border border-purple-50 italic text-xs text-purple-400">
            "Summarize the meeting notes into action items..."
          </div>
        </div>

        <div class="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all group">
          <div class="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:-rotate-6 transition-transform">🎯</div>
          <h3 class="text-2xl font-bold mb-4">Agile Projects</h3>
          <p class="text-gray-600 leading-relaxed">Manage complex roadmaps with boards, tables, and timelines. Custom properties let you track exactly what matters to your team.</p>
          <div class="mt-6 flex gap-2">
            <span class="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded">DONE</span>
            <span class="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded">IN PROGRESS</span>
          </div>
        </div>

      </div>
    </div>

    <div class="max-w-4xl mx-auto mt-32 text-center">
      <h2 class="text-4xl font-bold mb-16 underline decoration-gray-100 underline-offset-8">Used by the world's most innovative teams</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale">
         <div class="font-black text-2xl tracking-tighter italic">PIXAR</div>
         <div class="font-black text-2xl tracking-tighter">Uber</div>
         <div class="font-black text-2xl tracking-tighter italic">Nike</div>
         <div class="font-black text-2xl tracking-tighter">Spotify</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
</style>