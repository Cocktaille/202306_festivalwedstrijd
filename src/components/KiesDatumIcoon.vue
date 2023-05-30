<script setup>
import { ref, onMounted, computed } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"

const baseStore = useBaseStore()



const randomIconForOneDay = computed(() => {


  const icons = baseStore.iconsForOneDay

  // Shuffle the array using the Fisher-Yates shuffle algorithm
for (let i = icons.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [icons[i], icons[j]] = [icons[j], icons[i]];
}

// Display the shuffled icons
for (const icon of icons) {
  console.log(icon);
}

  return icons

})


</script>

<template>
    <div class="text-center">
        <h3 class="brand-font-primary brand-text-color-primary">Kies een icoon</h3>

        <div class="">
          <p>Een eendagsfestival: kies je festivaliconen</p>
          <p>Meerdaagsfestival: kies een datum icoon</p>
        </div>


        
      
        <!--Show for festival with multiple days-->
        <div v-if="baseStore.userFestivalChosen.dagen.length > 1" class="d-flex justify-content-around flex-wrap" >
            <div v-for="(festivaldag, index ) in baseStore.userFestivalChosen.dagen" :key="index" class="kies cursor-pointer ">
                <span @click="baseStore.chooseFestivalDay(festivaldag.ticketName)"><img :src="festivaldag.ico + '?v2'" alt="" class="w-75"></span>
            </div>
        </div>


        <!--Show for festival with 1 day-->
        <div v-else  class="d-flex justify-content-around flex-wrap">
            <div class="kies cursor-pointer " v-for="(icon, index) in randomIconForOneDay" :key="index">
                <span @click="baseStore.chooseIcon()">
                    <img :src="icon + '?v2'" class="w-75" alt="">
                </span>
            </div>
        </div>


    </div>
</template>

<style scoped>
.kies { text-align: center;  max-width:33%;}
</style>