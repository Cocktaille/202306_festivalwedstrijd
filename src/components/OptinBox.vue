<script setup>
import { ref, computed, onMounted, nextTick  } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"

const baseStore = useBaseStore()

let urlCiamCheckUser = ""
let urlZipCodeCheck = ""
const urlPostToMessagent = ref("")

nextTick(() => {

    urlCiamCheckUser = "https://interactief2." + baseStore.brandName + ".be/WedstrijdCR/WedstrijdCR.aspx?ID=w_1wXmbiOeZPMl89jlDTxbU126qvQGXjwhQXVBSG4sBve8jMM2acagHcJFMPn5Yj0n1rzBV3eeVDlw4AQB&notags=1&mail="

    urlZipCodeCheck = "https://interactief2." + baseStore.brandName + ".be/WedstrijdCR/WedstrijdCR.aspx?ID=ImrsUUT17SyQumFQAEtlotww8kMSfobYJzUj3f7zkC%2Bk%2BF0SH_3jpKGWcZ0PW7gPmEzyd_e4xEVKd4&notags=1&NAME="

    urlPostToMessagent.value = "https://interactief2." + baseStore.brandName + ".be/WedstrijdCR/WedstrijdCR.aspx?ID=dStwvDwGlYcN7KyhHSrErYPFUxNajWeozZ2JSb_Gignd9DwTQ0zfb5x57MWtjTtAkdbb7ZDu5RUmw6&notags=1"

  })








const mainOptin = ref([
    {
        optinServCode: "SERV_AC_LOCAL_NEWS",
        optinTitle: "Elke middag een update van het nieuws ontvangen?"
    }
])


const optionalOptins = ref([
    {
        optinServCode: "SERV_AC_PM_NEWS",
        optinTekst: "Ja, ik ontvang graag iedere namiddag het belangrijkste nieuws van de dag in mijn mailbox.",
    },
    {
        optinServCode: "SERV_AC_NB_REGIO",
        optinTekst: "Ja, ik wil op de hoogte blijven van het nieuws uit mijn regio."
    },
    {
        optinServCode: "SERV_AC_NB_PARTNER",
        optinTekst: "Ik ontvang graag interessante promoties en acties van partners van het Nieuwsblad."
    }
])


onMounted(() => {

    // Get the user data from site when the user is logged in 
    // and loadUserDataFromSite is set to true
    const checkUserDataFromSite = setInterval(function() {

        if (typeof MEDIAHUIS !== "undefined" ) {
            clearInterval(checkUserDataFromSite); // Stop checking for the variable
            userDataFromSite.value = MEDIAHUIS.user

            //prefill email field with the data
            userData.value.userMail = userDataFromSite.value.email

        }

    }, 500); 

})


const userData = ref({
    userMail: "",
    userZipCode: "",
    userCity: "",
    optinsChecked: [],
    newUser: false
})

const userDataFromSite = ref({})


const currentScreen = ref(0)
const showOptionalOptins = ref(true)



function handleForm() {
    handleErrors()

    
}


/**CHECK FOR ERRORS**/
const errors = ref([])

function handleErrors() {
    errors.value = []

    if(userData.value.userMail == "") {
        errors.value.push({error: "Vul een geldig e-mailadres in"})
    }
    if(currentScreen == 1 && userData.value.newUser == true && userData.value.userZipCode == "") {
        errors.value.push({error: "Vul een geldige postcode of gemeente in"})
    }

    /* Get optins and send data to Messagent */
    if( errors.value.length == 0 ) {
        if(showZipCode.value && currentScreen.value == 0) {
            currentScreen.value = 1
        }
        else {
            currentScreen.value = 2
            handleOptinForm();
        }
        
    }
}

/****NEED TO SHOW ZIPCODE?****/

const showZipCode = computed(() => {
    if  (userData.value.newUser || 
            mainOptin.value[0].optinServCode == 'SERV_AC_NB_LUNCH' || 
            mainOptin.value[0].optinServCode == 'SERV_AC_LOCAL_NEWS'
    ) {
        return true
    }
    else {
        return false
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


function handleOptinForm() {

    //if the user selected an optional optin, we hide the optional optins when he confirmed.
    if(userData.value.optinsChecked.length > 0) {
        showOptionalOptins.value = false
    }


    let optins = ""
    
    //first, the main optin

    optins += mainOptin.value[0].optinServCode + ',,,1|'


    //then, the optional optins
    for(var i = 0; i < userData.value.optinsChecked.length; i++) { 

        switch(userData.value.optinsChecked[i]) {
            case 'SERV_AC_LOCAL_NEWS':					
                optins += $(this).val() + ',' + $('#ZIP_CODE').val() + ',,1|';
                break;

            case 'SERV_AC_PM_NEWS':					
                optins += $(this).val() + ',' + $('#ZIP_CODE').val() + ',,1|';
                break;


            /*case 'SERV_AC_PM_NEWS':					
                optins += $(this).val() + ',~REGIO_HEADPOSTALCODE~,,1|';
                break;*/

            default:
                optins += $(this).val() + ',,,1|';
        }

        optins += userData.value.optinsChecked[i] + ',,,1|'

    }
    console.log(optins)

}


</script>

<template>
    
    <div class="optinWrapper my-10 p-5 bg-slate-200" 
        :class="{
            'bg-nb-lightblue/10': baseStore.brand == 'nb',
            'bg-gva-red/10': baseStore.brand == 'gva',
            'bg-hbvl-blue/10': baseStore.brand == 'hbvl'
        }
    ">

        

        <div v-if="currentScreen == 0">
            
            <form v-on:submit.prevent="handleForm()" class="mb-0">
                <div class="text-xl font-primary mb-3 font-bold">
                    {{ mainOptin[0].optinTitle }}
                </div>

                <div class="w-full sm:w-8/12 lg:w-9/12 float-left">
                    <div class="mb-5">
                        <input 
                            type="email" 
                            class="w-full p-2 mb-0 leading-normal pl-10 border border-solid border-black/25  focus:border-black/25 focus:outline-none outline-none  focus:ring-0"
                            v-model="userData.userMail" 
                            placeholder="jouwmail@mail.be"
                            @keyup="checkMailInCiam()" 
                            required
                        />
                        <span class="material-symbols-outlined ml-2 text-slate-500" style="margin-top:-32px">
                            mail
                        </span>
                    </div>
    
                    
                </div>

                <div class="w-full sm:w-4/12 lg:w-3/12 mb-5 sm:pl-5 float-right" v-if="!showZipCode">
                    <button class="btn-brand  text-white w-full p-2 ">Inschrijven > </button>
                </div>
                <div class="w-full sm:w-4/12 lg:w-3/12 mb-5 sm:pl-5 float-right" v-if="showZipCode">
                    <button class="btn-brand  text-white w-full p-2 " >Ga Verder > </button>
                </div>

                <div class="clear-both"></div>

                
            </form>
    
        </div>

        <div v-if="currentScreen == 1">
            <h3 class="text-xl font-primary mb-3">Vul je postcode of gemeente in:</h3>

            <form v-on:submit.prevent="handleForm()" class="mb-0">
                <div class="w-full sm:w-8/12 lg:w-9/12 float-left">
                    <div class="mb-0">
                        <input 
                            type="text"
                            class="w-full p-2 border border-solid border-black/25  focus:border-black/25 focus:outline-none outline-none  focus:ring-0"
                            v-model="userGemeenteInput"
                            @keyup="checkZipCode()"
                            placeholder="Bv: 2235"
                            autocomplete="false" 
                            required 
                            
                        />
                    </div>

                    <div class="mb-2">
                        <div class="autocomplete-item bg-white/60 text-black mb-0.5 p-2 cursor-pointer" 
                            v-for="(gemeente, index) in gemeentes" 
                            :key="index"
                            @click="selectGemeente(gemeente.name, gemeente.zip_code)"
                        >
                        {{gemeente.name}} ({{gemeente.zip_code}})
                        </div>
                    </div>
    
                    
                </div>

                <div class="w-full sm:w-4/12 lg:w-3/12 mb-5 sm:pl-5 float-right">
                    <button class="btn-brand  text-white w-full p-2 ">Inschrijven > </button>
                </div>


                <div class="clear-both"></div>
            </form>
                
        </div>
    
        <div v-if="currentScreen == 2">

            <div class="mb-5">
                <h3 class="text-2xl font-primary mb-3">Gelukt!</h3>
                <p class="mb-3">Onze redactie gaat meteen voor jou aan de slag. Binnenkort ontvang je onze eerste nieuwsbrief.</p>
                
                
                <div v-if="showOptionalOptins">
                    <form v-on:submit.prevent="handleForm()" class="mb-0">
                        <h3 class="text-lg font-primary mb-3">Misschien ben je geïnteresseerd in nog meer nieuwsbrieven?</h3>
        
                        <div v-for="(optin, index) in optionalOptins" :key="index"  >
                            <div class="flex text-left mb-5 text-base" >
                                <input 
                                v-model="userData.optinsChecked"
                                :value="optin.optinServCode"
                                type="checkbox" 
                                class="
                                    mt-1
                                    bg-transparent
                                    checked:bg-nb-orange
                                    text-nb-orange 
                                    w-6 
                                    h-6 
                                    rounded-none 
                                    border-solid
                                    border-2
                                    border-nb-orange
                                    focus:border-nb-orange
                                    focus:outline-none 
                                    outline-none  
                                    focus:ring-0 focus:ring-offset-0   "
                                    :id="index"
                                />
                                <label class="ml-5" :for="index" v-html="optin.optinTekst"></label>
                                
                            </div>
                        </div>

                        <div class="w-full sm:w-4/12 lg:w-3/12 mb-5  ">
                            <button class="btn-brand  text-white w-full p-2 ">Inschrijven > </button>
                        </div>
                    </form>
                </div >


            </div>

            
            
    
        </div>

        <div v-if="errors.length > 0" class="mb-6 text-red-600 font-bold">
            <div v-for="(error, index) in errors" :key="index">
                {{ error.error }}
            </div>
        </div>

        <div class="text-xs">
            Lees <a href="https://www.mediahuis.be/privacy">hier</a> ons privacybeleid
        </div>

        
    </div>

{{ userData }}

</template>

<style scoped>

</style>