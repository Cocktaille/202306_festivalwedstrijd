<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"

const baseStore = useBaseStore();

const props = defineProps({
    text: String,
    spinnerColor: String,
    ringColor: String,
})

</script>

<template>

    <div class="loader margin-tl"></div>
    <div class="loader-text text-center">{{text}}</div>

</template>

<style scoped>

.loader-text {font-size:1rem; margin-top:20px; margin-bottom:40px}

.loader {
  border: 16px solid #ffffff;
  border-color: v-bind(ringColor);
  border-radius: 50%;
  border-top: 16px solid #000068;
  border-top-color:v-bind(spinnerColor);
  width: 80px;
  height: 80px;
  margin:0 auto;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
}


/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>