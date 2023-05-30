<script setup>
import { ref, onMounted, computed } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"

const baseStore = useBaseStore()

const vragenAll = ref([])
onMounted(() => {
    fetch("https://opensheet.elk.sh/1gL6fNI2jnzIAsdr4t6gBmhMoPPAWMJXwjQVn5_zWs3E/Blad1")
    .then(response => response.json() )
        .then(data => {
            vragenAll.value = data
        });
})

const vragenFestival = computed(() => {
  const festival = baseStore.userFestivalChosen.naam
  const vragenAll = baseStore.vragenAll

  //first filter the questions 
  const filteredVragen = vragenAll.filter(function(item) {
    return item.FESTIVAL == festival
  })

  const randomVraag = filteredVragen[Math.random() * filteredVragen.length | 0];

  return randomVraag

})

function checkAntwoord (antwoord, juistantwoord) {
    if (antwoord == juistantwoord) {
        baseStore.currentScreen++
    }
    else {
        baseStore.currentScreen = 10
    }
}


</script>

<template>
    <div>
        <p>Hey, Je wil meespelen voor  <strong>{{ baseStore.userFestivalChosen.naam }}</strong>.</p>
        <p><strong>Beantwoord eerst nog even deze vraag:</strong></p>
        
        <h2 class="brand-font-primarsy brand-text-color-primary text-md text-bold mb-3">{{ vragenFestival.VRAAG }}</h2>

        <div class="mb-3" v-if="vragenFestival.IMG_URL != undefined ">
            <img class="w-100" :src="vragenFestival.IMG_URL" alt="">
        </div>

        <div class="btn btn-lg col-12 rounded-none mb-2 brand-button-color-primary" 
            v-if="vragenFestival.ANTWOORD_1 != '' " 
            @click="checkAntwoord(vragenFestival.ANTWOORD_1, vragenFestival.JUIST_ANTWOORD)"
        >
            {{ vragenFestival.ANTWOORD_1 }}
        </div>
        <div class="btn btn-lg col-12 rounded-none mb-2 brand-button-color-primary" 
            v-if="vragenFestival.ANTWOORD_2 != '' " 
            @click="checkAntwoord(vragenFestival.ANTWOORD_2, vragenFestival.JUIST_ANTWOORD)"
        >
            {{ vragenFestival.ANTWOORD_2 }}
        </div>
        <div class="btn btn-lg col-12 rounded-none mb-2 brand-button-color-primary" 
            v-if="vragenFestival.ANTWOORD_3 != '' " 
            @click="checkAntwoord(vragenFestival.ANTWOORD_3, vragenFestival.JUIST_ANTWOORD)"
        >
            {{ vragenFestival.ANTWOORD_3 }}
        </div>
        
        
    </div>
</template>

<style scoped>

</style>