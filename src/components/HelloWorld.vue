<script setup>
import { ref, onMounted } from "vue"
import { useCounterStore } from "@/stores/counter.js"

const counterStore = useCounterStore()
const props = defineProps(['msg', "brand"])


</script>

<template>
  <div class="greetings mb-3 text-center">
    <div class="p-3 ">
      <div class="mb-3">
        <img src="https://static.nieuwsblad.be/Assets/Images_Upload/2023/03/21/brand_square_main.png?v4" alt="" class="w-25">
      </div >
      <div class="mb-12">
        <h1 class="brand-font-primary text-4xl mb-1 text-accent-blue" v-html="brand"></h1>
        <h2 class="brand-font-primary text-2xl mb-5 text-accent-purple" v-html="msg"></h2>
      </div >

      <div class="clear-both"></div>
  
      <p>
        You’ve successfully created a project with
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      </p>

      <p class="mt-3">Also, a beautiful Pinia store is ready for you to use:</p>
    </div >

    
    
    <div class="mt-3 mb-3 p-3 bg-lightgrey text-center full-block "> 
      
      <div class="row">
        <div class="col-12">
          <div class="brand-font-primary text-4xl mb-3  ">{{ counterStore.count }}</div>
        </div>
        
      </div>

      <div class="row">
        <div class="col-12 col-md-4 offset-md-2 mb-3 mb-md-0">
          <button class="brand-button-color-primary col-12 p-2 border-0 brand-button-color-secondary" @click="counterStore.decrement">
            Give me less
          </button>
        </div>
        <div class="col-12 col-md-4 ">
          <button class="brand-button-color-primary col-12 p-2 border-0 brand-button-color-secondary " @click="counterStore.increment">
            Give me more!
          </button>
        </div>
      </div>

    </div> 


    <div class="mt-5">
      Css Styling is based on <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/">Bootstrap 4</a>, with additional stylesheet for the brands
    </div >
    <div class="mt-5 ">
      <p>
        <i class="fa-solid fa-cloud-arrow-up"></i> <i class="fa-regular fa-clock"></i> <i class="fa-solid fa-school-flag"></i> Icons are served by <a href="https://fontawesome.com/search?o=r&m=free">Font Awesome</a>
      </p>
    </div >

    <div class="alert alert-primary mt-5  ">
      This project is still in development...
    </div >

    <div class="brand-font-primary text-3xl mt-10 -mx-5 md:mx-0 p-5 bg-slate-300 text-accent-blue  ">
      
        Available Components:
      
    </div >
    
  </div>
</template>

<style scoped>

</style>
