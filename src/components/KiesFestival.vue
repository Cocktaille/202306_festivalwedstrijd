<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"

const baseStore = useBaseStore()




</script>

<template>
    <div class="text-center">
        <h3 class="brand-font-primary brand-text-color-primary mb-4">Kies je favoriete festival om verder te gaan</h3>

      

      <div class="d-flex justify-content-center flex-wrap">
          <div v-for="(festival, index ) in baseStore.festivalsPerWeek" :key="index" class="kies cursor-pointer ">
            <span @click="baseStore.chooseFestival(festival)">
                <img :src="festival.logo" alt="" class="w-100">
                <div class="mt-2" style="color:#000068; font-weight:bold">{{ festival.naam }}</div>
            </span>
          </div>
      </div>


    </div>
</template>

<style scoped>
.kies {padding:10px; text-align: center; background:#ffffff; margin-bottom:10px; max-width:33%;}
</style>