<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"

const baseStore = useBaseStore()




</script>

<template>
    <div class="text-center">
        <h3 class="brand-font-primary brand-text-color-primary">Kies je favoriete festival</h3>

      

      <div class="d-flex justify-content-around flex-wrap">
          <div v-for="(festival, index ) in baseStore.festivals" :key="index" class="kies cursor-pointer ">
            <span @click="baseStore.chooseFestival(festival)">
                <img :src="festival.logo" alt="" class="w-100">
            </span>
          </div>
      </div>


    </div>
</template>

<style scoped>
.kies {padding:10px; text-align: center; background:#ffffff; max-width:33%;}
</style>