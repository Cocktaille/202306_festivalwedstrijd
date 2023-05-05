<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"

import LoaderSpinner from "@/components/LoaderSpinner.vue"

const baseStore = useBaseStore();

const props = defineProps({
    loadUserDataFromSite: Boolean,
    schiftingsVraag: Boolean,
})

const urlCiamCheckUser = "https://interactief2.nieuwsblad.be/WedstrijdCR/WedstrijdCR.aspx?ID=w_1wXmbiOeZPMl89jlDTxbU126qvQGXjwhQXVBSG4sBve8jMM2acagHcJFMPn5Yj0n1rzBV3eeVDlw4AQB&notags=1&mail="
const urlZipCodeCheck = "https://interactief2.nieuwsblad.be/WedstrijdCR/WedstrijdCR.aspx?ID=ImrsUUT17SyQumFQAEtlotww8kMSfobYJzUj3f7zkC%2Bk%2BF0SH_3jpKGWcZ0PW7gPmEzyd_e4xEVKd4&notags=1&NAME="
const urlPostToMessagent = ref("https://interactief2.nieuwsblad.be/WedstrijdCR/WedstrijdCR.aspx?ID=dStwvDwGlYcN7KyhHSrErYPFUxNajWeozZ2JSb_Gignd9DwTQ0zfb5x57MWtjTtAkdbb7ZDu5RUmw6&notags=1")




const userData = ref({
    userMail: "",
    userZipCode: "",
    userCity: "",
    optinsChecked: [],
    newUser: false
})

const userDataFromSite = ref({})

const schifting = ref("")

const showLoaderSpinner = ref(false)


onMounted(() => {

    // Get the user data from site when the user is logged in 
    // and loadUserDataFromSite is set to true
    if(props.loadUserDataFromSite) {
        const checkUserDataFromSite = setInterval(function() {

            if (typeof MEDIAHUIS !== "undefined" ) {
                clearInterval(checkUserDataFromSite); // Stop checking for the variable
                userDataFromSite.value = MEDIAHUIS.user

                //prefill email field with the data
                userData.value.userMail = userDataFromSite.value.email
            }

        }, 500); 
    }
    

})



/****CHECK IF USERMAIL IS ALREADY IN MESSAGENT****/

function checkMailInCiam() {

    const url = urlCiamCheckUser + userData.value.userMail

    if(userData.value.userMail == "") {
        userData.value.newUser = false
    }
    

    function simIsValidEmailAddress(emailAddress) {
                
        //eslint-disable-next-line
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);

        return pattern.test(emailAddress);

    }

    if(simIsValidEmailAddress(userData.value.userMail)){

        setTimeout(function() {
            fetch(url)
            .then(response => response.text())
            .then(data => {
            console.log(data.trim()) 
                if(data.trim() == "FOUND") {
                    userData.value.newUser = false
                }
                if(data.trim() == "NOT_FOUND") {
                    userData.value.newUser = true
                }
               
            })
            .catch(error => console.error(error))

        }, 500);

    }
}

/****CHECK ZIPCODE****/

const userGemeenteInput = ref("")
const gemeentes = ref([])

function checkZipCode() {
    if(userGemeenteInput.value.length > 1) {
        fetch(urlZipCodeCheck + userGemeenteInput.value)
        .then(response => response.json() )
        .then(data => {
            gemeentes.value = data.cities.city
            userData.value.userCity = data.cities.city[0].name;
            userData.value.userZipCode = data.cities.city[0].zip_code;
        });
    }
    if(userGemeenteInput.value.length <= 1) {
        gemeentes.value = []
    }
}


function selectGemeente(gemeentenaam, hoofdpostcode) {
    userData.value.userCity = gemeentenaam;
    userData.value.userZipCode = hoofdpostcode

    const userGemeenteInputs = userGemeenteInput.value
    function hasNumber(userGemeenteInputs) {
        return /\d/.test(userGemeenteInputs);
    }
    if(hasNumber(userGemeenteInputs) == true) {
        userGemeenteInput.value = userData.value.userZipCode
    }
    else {
        userGemeenteInput.value = userData.value.userCity
    }
    
    gemeentes.value = []
}



/****HANDLE FORM SUBMIT****/

function handleForm() {
    /* Check errors */
    handleErrors();

    
    
}


/**CHECK FOR ERRORS**/
const errors = ref([])

function handleErrors() {
    errors.value = []

    baseStore.scrollToTop()

    /*only if there is a schiftingsvraag*/
    if(props.schiftingsVraag && schifting.value == "") {
        errors.value.push({error: "Vul een geldig antwoord op de schiftingsvraag in"})
    }
    /*only if there is a schiftingsvraag*/

    if(userData.value.userMail == "") {
        errors.value.push({error: "Vul een geldig e-mailadres in"})
    }
    if(userData.value.newUser == true && userData.value.userZipCode == "") {
        errors.value.push({error: "Vul een geldige postcode of gemeente in"})
    }

    /* Get optins and send data to Messagent */
    if( errors.value.length == 0 ) {
        handleRegForm();
    }
}


/**GATHER OPTINS & SEND DATA TO MESSAGENT**/

function handleRegForm() {
    console.log("Register")

    var urlPostToMessagentWithData = urlPostToMessagent.value 
                + "&mail=" + userData.value.userMail 
                + "&zip_code=" + userData.value.userZipCode 
                + "&city=" + userData.value.userCity 
                + "&schifting=" + schifting.value;

    // Add optins to registration link

    var urlPostToMessagentWithDataAndOptins = urlPostToMessagentWithData
    
    if (userData.value.optinsChecked.length > 0) {
        for(var i= 0; i < userData.value.optinsChecked.length; i++) {
            // console.log(userData.value.optinsChecked[i])
            urlPostToMessagentWithDataAndOptins = urlPostToMessagentWithDataAndOptins + "&" + userData.value.optinsChecked[i] + "=1" 
            
        }
        console.log(urlPostToMessagentWithDataAndOptins)
    } 

    showLoaderSpinner.value = true

    // Post data to Messagent.

    fetch(urlPostToMessagentWithDataAndOptins)
    .then(response => {
        if (response.ok) {
            
            formSubmitted()
            return response.text().then(text => ({ status: response.status, text }));
            
        } else {
            throw new Error('Network response was not OK');
        }
    })
    .then(data => {
        const cb = data.text
        console.log(cb)
        showLoaderSpinner.value = false
        
    })
        
    .catch(error => console.error(error));

    


}




function formSubmitted() {
    alert("OK")
}







</script>

<template>
    <div id="registratieLight" class="md:w-6/12 m-auto text-center">
  
      <LoaderSpinner 
        v-if="showLoaderSpinner"
        text="Even geduld" 
        spinnerColor="#EF83F7"
        ringColor="#efefef"
      />
  
      <form v-on:submit.prevent="handleForm()">
          
          <div class="mb-2 text-error text-bold">
              <div v-for="(error, index) in errors" :key="index">
                  {{ error.error }}
              </div>
          </div>
  
          <div v-if="schiftingsVraag" class="mb-4 ">
              <h3 class="brand-font-primary brand-text-color-primary mb-2 text-lg  text-bold">Schiftingsvraag:</h3>
              <div class="mb-3 text-bold">
                  Hoeveel personen zullen deelgenomen hebben aan deze wedstrijd op zondag 7 mei om 20.00u?
              </div>
              <input 
                  type="number"
                  class="col-12 p-2 border border-solid "
                  v-model="schifting"
                  placeholder="Bv: 12345" 
                  
                  
              />
          </div>
  
          <div class="mb-4 ">
              <div class="brand-font-primary brand-text-color-primary mb-2 text-lg text-bold ">Vul je e-mailadres in:</div>
              <input 
                  type="email"
                  class="col-12 p-2 border "
                  v-model="userData.userMail"
                  @input="e => userData.userMail = e.target.value"
                  @keyup="checkMailInCiam()" 
                  placeholder="jouwmail@mail.be" 
                  required
                  
              />
          </div>
  
          <div class="newuser mb-4" >
  
              <h3 class="brand-font-primary brand-text-color-primary mb-2 text-lg text-bold ">Vul je postcode of gemeente in:</h3>
              <input 
                  type="text"
                  class="col-12 p-2 border "
                  v-model="userGemeenteInput"
                  @keyup="checkZipCode()"
                  placeholder="Bv: 2235"
                  autocomplete="false" 
                  required 
                  
              />
              <div class="mb-2">
                  <div class="autocomplete-item bg-lightgrey text-black mb-1 p-2 cursor-pointer" 
                      v-for="(gemeente, index) in gemeentes" 
                      :key="index"
                      @click="selectGemeente(gemeente.name, gemeente.zip_code)"
                  >
                  {{gemeente.name}} ({{gemeente.zip_code}})
                  </div>
              </div>
  
          </div>
  
          <div class="mb-3">
              <div v-for="(optin, index) in baseStore.optins" :key="index"  >
  
                  <div v-if="!optin.onlyForNewReg">
                      <div class="ml-1 text-left mb-4 custom-control custom-checkbox" >
                          <input 
                          v-model="userData.optinsChecked"
                          :value="optin.optinName"
                          type="checkbox" 
                          class=" mt-1 custom-control-input"
                          :id="index"
                          />
                          <label class="custom-control-label" :for="index" v-html="optin.optinTekst"></label>
                      </div>
                  </div >
  
                  <div v-if="userData.newUser && optin.onlyForNewReg">
                      <div class="ml-1 text-left mb-4 custom-control custom-checkbox" >
                          <input 
                          v-model="userData.optinsChecked"
                          :value="optin.optinName"
                          type="checkbox" 
                          class=" mt-1 custom-control-input"
                          :id="index"
                          />
                          <label class="custom-control-label" :for="index" v-html="optin.optinTekst"></label>
                      </div>
                  </div >
      
                  
      
      
              </div>
          </div >
  
          <div v-if="userData.newUser" class="text-sm text-muted mb-3 ">
              Mediahuis biedt jou als geregistreerde gebruiker een persoonlijke en kwaliteitsvolle nieuwsbeleving: we tonen relevante advertenties en zorgen ervoor dat je niet steeds hetzelfde ziet. Naast het nieuws van de dag kunnen we artikels aanbevelen op basis van je voorkeuren en interesses. Je geeft ook aan welke voordeelacties of nieuwsbrieven je graag ontvangt. Registratie is gratis, maar we hebben wel persoonsgegevens nodig om deze dienst te kunnen aanbieden. Vul bovenstaande velden in om deze gratis dienst te gebruiken en klik op de knop om verder te gaan. Lees de volledige voorwaarden op <a href="https://mediahuis.be/privacy" class="text-muted " target="_blank"><u>deze pagina</u></a>.
          </div>
  
  
          <div class=" mb-5">
              <button class="brand-button-color-primary col-12 p-3 border-0 ">Ga verder > </button>
          </div>
  
  
          <!-- {{ userData }}
          <br /><br />
          {{ errors }} -->
  
      </form>
  
          
      
    </div>
  </template>
  
  <style scoped>
  
  </style>

<style scoped>

</style>
