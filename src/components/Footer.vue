<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"

const baseStore = useBaseStore()

const options = window.options

// Get the modal

const modal = ref(null)
const span = ref(null)
const htmlcontent = ref(null)
const footerTitle = ref("")

// When the user clicks on the button, open the modal and set the iframe source
function openModal(url, title) {


  modal.value.style.display = "block";
  footerTitle.value = title;
  //document.getElementById("iframeUrl").src = url;


  fetch(url)
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        console.log(doc)
        const myDivContent = doc.getElementById('messagentWrap').innerHTML;
        htmlcontent.value.innerHTML = myDivContent;
    })
    .catch(error => console.error(error));

}

// When the user clicks on <span> (x), close the modal and reset the iframe source
function closeModal() {
  modal.value.style.display = "none";
  document.getElementById("iframeUrl").src = "";
}

// When the user clicks anywhere outside of the modal, close it and reset the iframe source
window.onclick = function(event) {
  if (event.target == modal.value) {
    modal.value.style.display = "none";
    document.getElementById("iframeUrl").src = "";
  }
}




</script>

<template>
    <div class="footer text-center text-sm mb-4 mt-5" style="opacity:0.5">
        <span 
            
            @click="openModal('https://interactief2.nieuwsblad.be/WedstrijdCR/WedstrijdCR.aspx?ID=HvLx6OJ8P10j1s2THcoGtCo7lPvL3lXBKq5mtM2o7JDVa8xqtGyiM%2Bk3tf7SCxxm6VwMOJLQNQ9v2g', 'Prijzenpot')" 
            target="_blank" 
            class="brand-text-color-primary cursor-pointer text-underline mr-2"
        >Prijzenpot</span>
        <span 

            @click="openModal('https://interactief2.nieuwsblad.be/WedstrijdCR/WedstrijdCR.aspx?ID=QtSC_4PZvLL%2B5tU42WpOWwn06O5Jzps3gKRtxVyZw72%2Blz5p4XVJZYKFlNrxLEYryMik0uOKECRZUG', 'Reglement')" 
            target="_blank" 
            class="brand-text-color-primary cursor-pointer text-underline mr-2"
        >Reglement</span>
    </div>

    <div id="footerModal" ref="modal" class="app-modal">
        <div class="footer-modal-content text-left">
            
            <span ref="span" class="close" @click="closeModal">&times;</span>
            <h3 class="brand-font-primary text-md">{{ footerTitle }}</h3>
            <div id="htmlcontent" ref="htmlcontent"></div>
            
            <!-- <iframe id="iframeUrl" src=""></iframe> -->
        </div>
    </div>

</template>


<style scoped>
    #app-reglement {text-align:center; }

/* The Modal (background) */
.app-modal {
display: none;
position: fixed;
z-index: 99999;
padding-top: 5vh;
padding-right: 5vw;
padding-left: 5vw;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0, 0, 0, 0.4);

}

/* Modal Content */
.footer-modal-content {
position: relative;
background-color: #fefefe;
margin: auto;
padding: 20px 20px;
border: 1px solid #888;
width: 80%;
height:80vh;
max-width: 700px;
overflow:auto
}

/* Close Button */
.close {
position: fixed;
top: auto;
margin-top:-15px;
right: 30px;
color: #aaa;
font-size: 28px;
font-weight: bold;
padding: 10px;
background: white;
opacity: 1 !important;
z-index:9999999
}

.close:hover,
.close:focus {
color: black;
text-decoration: none;
cursor: pointer;
}



/* Iframe */
#iframeUrl {
width: 100%;
height: 100%;
border: none;
}

/* Responsive Iframe */
@media screen and (max-width: 700px) {
.footer-modal-content {
width: 100%;
}
}
</style>