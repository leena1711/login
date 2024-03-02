<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="carousel w-11/12 lg:w-1/2 rounded-2xl shadow-neutral-700 shadow-lg">
      <div id="item1" class="carousel-item w-full">
        <img src="@/assets/img/ayaya.png" class="w-full" />
      </div> 
      <div id="item2" class="carousel-item w-full">
        <img src="@/assets/img/march.png" class="w-full" />
      </div> 
      <div id="item3" class="carousel-item w-full">
        <img src="@/assets/img/hutao.png" class="w-full" />
      </div> 
      <div id="item4" class="carousel-item w-full">
        <img src="@/assets/img/neuvi.jpg" class="w-full" />
      </div>
    </div> 
    <div class="flex justify-center gap-2 mt-10">
      <a href="#item1" class="btn btn-xs">1</a> 
      <a href="#item2" class="btn btn-xs">2</a> 
      <a href="#item3" class="btn btn-xs">3</a> 
      <a href="#item4" class="btn btn-xs">4</a>
    </div>
    <div class="form-control mt-6">
      <RouterLink to="/"><button class="btn btn-primary">Go Back</button></RouterLink>
    </div>
  </div>
</template>
