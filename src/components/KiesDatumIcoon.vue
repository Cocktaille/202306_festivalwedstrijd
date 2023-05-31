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

        <p><strong>Je antwoord is correct.</strong></p>
        <p v-if="baseStore.userFestivalChosen.dagen.length > 1" class=" mb-4">Kies je favoriete dag en ontdek meteen of jij een duoticket voor <strong>{{ baseStore.userFestivalChosen.naam }}</strong> wint:</p>
        <p v-else class=" mb-4">Kies een icoon en ontdek meteen of jij een duoticket voor <strong>{{ baseStore.userFestivalChosen.naam }}</strong> wint:</p>

        


        
      
        <!--Show for festival with multiple days-->
        <div v-if="baseStore.userFestivalChosen.dagen.length > 1" class="d-flex justify-content-center flex-wrap" >
            <div v-for="(festivaldag, index ) in baseStore.userFestivalChosen.dagen" :key="index" class="kies cursor-pointer ">
            
                  <span @click="baseStore.chooseFestivalDay(festivaldag.ticketName, baseStore.userFestivalChosen.naam)"><img :src="festivaldag.ico + '?v2'" alt="" class="w-75"></span>
            </div>
        </div>


        <!--Show for festival with 1 day-->
        <div v-else  class="d-flex justify-content-around flex-wrap">
            <div class="kies cursor-pointer " v-for="(icon, index) in randomIconForOneDay" :key="index">
                  <span @click="baseStore.chooseFestivalDay(baseStore.userFestivalChosen.dagen[0].ticketName, baseStore.userFestivalChosen.naam)">
                    <img :src="icon + '?v2'" class="w-75" alt="">
                </span>
            </div>
        </div>


        <div class="mt-3" style="padding:20px; background:#edf9ff; margin:-15px" v-if="baseStore.userFestivalChosen.naam == 'Live /s Live' ">
          
            <strong>Zaterdag 24/06:</strong><br /> The War on Drugs, Balthazar, Warpoint, Sylvie Kreusch, Novastar, … 
            <br /><br />
            <strong>Zondag 25/06:</strong><br /> dEUS, Grace Jones, Admiral Freebee, Suede, …
          
        </div>

        <div class="mt-3" style="padding:20px; background:#edf9ff;margin:-15px " v-if="baseStore.userFestivalChosen.naam == 'Lokerse Feesten' ">
          
          <strong>Zaterdag 05/08:</strong><br /> Kungs, Rag’n’Bone Man, XINK, GLINTS, De jeugd van tegenwoordig, …<br /><br />
          <strong>Zondag 06/08:</strong><br /> Stake, Bullet for my Valentine, Megadeth, Within Temptation, Amenra, …<br /><br />
          <strong>Woensdag 09/08:</strong><br /> Bizkit Park, Pennywise, Cyprus Hill, Stiktof, …<br /><br />
          <strong>Vrijdag 11/08:</strong><br /> Pommelien Thijs, Bart Peeters & De Ideale Mannen, Metejoor, Regi Live, …<br /><br />
          <strong>Zaterdag 12/08:</strong><br /> Camille, Anouk, Arsenal, Skunk Anansie, K’s Choise, …<br /><br />

        
      </div>


    </div>
</template>

<style scoped>
.kies { text-align: center;  max-width:33%; margin-bottom:20px}
</style>