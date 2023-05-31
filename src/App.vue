<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"

import RegistrationLight from './components/RegistrationLight.vue'
import Share from './components/Share.vue'
import LoaderSpinner from './components/LoaderSpinner.vue'
import WedstrijdVragen from './components/WedstrijdVragen.vue'
import KiesFestival from "./components/KiesFestival.vue"
import KiesDatumIcoon from "./components/KiesDatumIcoon.vue"
import Footer from './components/Footer.vue'

const baseStore = useBaseStore()




</script>

<template>
  <div id="messagentWrap"   :class="baseStore.brandShortName">  
    <div class="container-fluid text-center">
      
      <div class="full-block mb-4">
        <img src="https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/header_festivaltickets_green.png?v2" alt="" class="d-none d-md-block w-100">
        <img src="https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/header_festivaltickets_green.png?v2" alt="" class="d-md-none w-100">
      </div>


      <div v-if="baseStore.currentScreen == 0 " >

        <div v-if="baseStore.week == 1 ">
          <p>Het Nieuwsblad stuurt je naar de beste festivals! Speel mee en win deze week duotickets voor Cactusfestival, Lokerse Feesten, Afro-Latino Festival, Live /s Live of Paradise City.</p>
          
          <p><strong>Waag ieder uur opnieuw je kans!</strong></p>
        </div>

        <div v-if="baseStore.week == 2 ">
          <p>Het Nieuwsblad stuurt je naar de beste festivals! Speel mee en win deze week duotickets voor Rammstein, Pukkelpop, Nostalgie Beach Festival en Dranouter.</p>
          
          <p><strong>Waag ieder uur opnieuw je kans!</strong></p>
        </div>

        <RegistrationLight 
          :loadUserDataFromSite="true"
          :schiftingsVraag="false"
        /> 
      </div>

      <div v-show="baseStore.currentScreen == 1 " >

        <KiesFestival />

        
      </div>

      <div v-if="baseStore.currentScreen == 2 " >

        <WedstrijdVragen />


      </div>


      <div v-if="baseStore.currentScreen == 3 " >

        <KiesDatumIcoon />
        


      </div>

      <div v-if="baseStore.currentScreen == 4 " >

        <h4 class="brand-font-primary brand-text-color-primary">Proficiat!</h4> 
        <p><strong>Je wint een duoticket voor {{ baseStore.userFestivalChosen.naam }}</strong></p>

        <p>Je ontvangt zo dadelijk een e-mail met verdere informatie.</p>

        <p>Volgende week maak je de hele week kans op tickets voor Rammstein, Pukkelpop, Nostalgie Beach Festival en Dranouter.</p>

        <Share 
          msg="Deel met je vrienden:" 
          :facebook="true" 
          :twitter="true" 
          :whatsapp="true" 
          :messenger="false"  
        />
      
      </div>

      <div v-if="baseStore.currentScreen == 5 " >


        <p><strong>Helaas, je hebt niet gewonnen.</strong></p>
        <p><span>Kom volgend uur zeker terug en waag opnieuw je kans.</span></p>
        <p>Ook volgende week maak je de hele week kans op tickets voor Rammstein, Pukkelpop, Nostalgie Beach Festival en Dranouter.</p>

        <Share 
          msg="Deel met je vrienden:" 
          :facebook="true" 
          :twitter="true" 
          :whatsapp="true" 
          :messenger="false"  
        />

      </div>


      <div v-if="baseStore.currentScreen == 10 " >

        <div class="">
          <h4 class="brand-font-primary brand-text-color-primary">Jammer!</h4> 
          <p>Je gaf een fout antwoord op de wedstrijdvraag.</p>
          <p>Probeer het volgend uur opnieuw</p>
        </div>

        <Share 
        msg="Deel met je vrienden:" 
        :facebook="true" 
        :twitter="true" 
        :whatsapp="true" 
        :messenger="false"  
      />


      </div>


      <Footer  />


      <div v-if="baseStore.currentScreen == 0 && baseStore.week == 1">
        <img src="https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos_footer_week_1.png?v2" alt="" class="w-100">
      </div>

      <div v-if="baseStore.currentScreen == 0 && baseStore.week == 2">
        <img src="https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos_footer_week_2.png?v2" alt="" class="w-100">
      </div>

      <!-- <Share 
        msg="Deel met je vrienden:" 
        :facebook="true" 
        :twitter="true" 
        :whatsapp="true" 
        :messenger="false"  
      />  -->

      <!-- <LoaderSpinner 
        text="Even geduld" 
        spinnerColor="#EF83F7"
        ringColor="#efefef"
      /> -->
      



    </div>
  </div>
   
</template>

<style >
@import 'https://www.nieuwsblad.be/extra/static/messagent/templates/2022/css/bootstrap4_prefixed.css';

@import 'https://fonts.googleapis.com/icon?family=Material+Icons';

@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://markup.nieuwsblad.be/extra/assets/css/fonts.css");
@import url("https://markup.hbvl.be/fonts/v2.0.0/fonts.css");
@import url("https://markup.gva.be/fonts/v2.0.0/fonts.css");

#appwrapper {background:white}


/**** BRAND ****/

/**fonts**/
#messagentWrap.nb {font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important; }
#messagentWrap.nb .brand-font-primary {font-family:Produkt,Arial,Helvetica,sans-serif !important; font-weight: bold;}
#messagentWrap.nb .brand-font-secondary {font-family:Vitesse Black,sans-serif !important; }

#messagentWrap.hbvl {font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;}
#messagentWrap.hbvl .brand-font-primary {font-family: 'Mark Pro Narrow' !important }
#messagentWrap.hbvl .brand-font-secondary {font-family: 'Helvetica Neue Condensed' !important  }

#messagentWrap.gva {font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;}
#messagentWrap.gva .brand-font-primary {font-family: FFGoodProWide, 'FFGoodProWide Fallback', Open Sans, Arial, Helvetica, sans-serif !important }
#messagentWrap.gva .brand-font-secondary {font-family: FGoodOTCondensed, 'FFGoodOTCondensed Fallback', Open Sans, Arial, Helvetica, sans-serif !important  }
/**fonts**/

/**colors**/
#messagentWrap.nb .brand-text-color-primary { color:#000000 }
#messagentWrap.nb .brand-text-color-secondary { color:#5811F4 }
#messagentWrap.nb .brand-text-color-tertiary { color:#000000 }

#messagentWrap.nb .brand-button-color-primary { background-color:#F7D611; color:black; font-weight: bold; }
#messagentWrap.nb .brand-button-color-secondary { background-color:#5811F4; color:white; }
#messagentWrap.nb .brand-button-color-tertiary { background-color:#000000; color:white; }

#messagentWrap.nb .bg-lightgrey {background-color: #efefef;}

#messagentWrap.nb .text-accent-blue { color:#000068}
#messagentWrap.nb .text-accent-orange { color:#F75821}
#messagentWrap.nb .text-accent-pink { color:#EF83F7}
#messagentWrap.nb .text-accent-lightblue { color:#29ABE2}
#messagentWrap.nb .text-accent-purple { color:#5811F4}
#messagentWrap.nb .text-accent-green { color:#00ED36}
#messagentWrap.nb .text-accent-yellow { color:#F7D611}



#messagentWrap.hbvl .brand-text-color-primary { color:#009fe3 }
#messagentWrap.hbvl .brand-text-color-secondary { color:#000000 }
#messagentWrap.hbvl .brand-text-color-tertiary { color:#000000 }

#messagentWrap.hbvl .brand-button-color-primary { background-color:#ffed00; color:black; }
#messagentWrap.hbvl .brand-button-color-secondary { background-color:#009fe3; color:white; }
#messagentWrap.hbvl .brand-button-color-tertiary { background-color:#000000; color:white; }

#messagentWrap.hbvl .bg-lightgrey {background-color: #FFEFCC;}




#messagentWrap.gva .brand-text-color-primary { color:#e20714 }
#messagentWrap.gva .brand-text-color-secondary { color:#000000 }
#messagentWrap.gva .brand-text-color-tertiary { color:#000000 }

#messagentWrap.gva .brand-button-color-primary { background-color:#e20714; color:white; }
#messagentWrap.gva .brand-button-color-secondary { background-color:#000000; color:white; }
#messagentWrap.gva .brand-button-color-tertiary { background-color:#000000; color:white; }

#messagentWrap.gva .bg-lightgrey {background-color: #ffeff0;}
/**colors**/
/**** BRAND ****/



/****MAIN****/
#messagentWrap  {font-size:16px}

/**checkbox**/
#messagentWrap .custom-control-label {padding-left:10px}
#messagentWrap .custom-checkbox .custom-control-label::before {
    border-radius: 0;
    transform: scale(1.5);
}

#messagentWrap .custom-control-label::before, #messagentWrap .custom-file-label, #messagentWrap .custom-select {
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.custom-control-label::before {
    position: absolute;
    top: 0.4rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    content: "";
    background-color: transparent ;
    border: black solid 1px;
}

#messagentWrap .custom-checkbox .custom-control-input:checked~.custom-control-label::after {
    
}


#messagentWrap .custom-control-label::after {
    position: absolute;
    top: 0.25rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: "";
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80% 70%;
}

/*remove the blue outline on focus from checkbox*/
input[type="checkbox"]:focus + label::before {
  outline: none !important;
  box-shadow: none !important
}

#messagentWrap.nb .custom-control-label::before {
  border-color: #F75821;
}
#messagentWrap.nb .custom-control-input:checked~.custom-control-label::before {
    color: #fff;
    border-color: #F75821;
    background-color: #F75821;
}

#messagentWrap.gva .custom-control-label::before {
  border-color: #e20714;
}
#messagentWrap.gva .custom-control-input:checked~.custom-control-label::before {
    color: #fff;
    border-color: #e20714;
    background-color: #e20714;
}

#messagentWrap.hbvl .custom-control-label::before {
  border-color: #000000;
}
#messagentWrap.hbvl .custom-control-input:checked~.custom-control-label::before {
    color: #fff !important;
    border-color: #000000;
    background-color: #000000;
}

/**checkbox**/

/****MAIN****/




/**** HELPER CLASSES ****/
#messagentWrap .text-xs { font-size:0.5rem; line-height: 1rem;}
#messagentWrap .text-sm { font-size:0.7rem; line-height: 1.1rem}
#messagentWrap .text-md { font-size:1.2rem; line-height: 1.5rem}
#messagentWrap .text-lg { font-size:1.5rem; line-height: 2rem}
#messagentWrap .text-xl { font-size:1.8rem; line-height: 2.3rem}
#messagentWrap .text-2xl { font-size:2rem; line-height: 2.5rem}
#messagentWrap .text-3xl { font-size:2.5rem; line-height: 3rem}
#messagentWrap .text-4xl { font-size:3rem; line-height: 3.5rem}

#messagentWrap .text-bold {font-weight: bold;}
#messagentWrap .text-muted {opacity:0.8}
#messagentWrap .text-error {color:red}
#messagentWrap .text-underline {text-decoration: underline;}

#messagentWrap .cursor-pointer {cursor:pointer}

#messagentWrap .no-underline {text-decoration: none !important;}

#messagentWrap .rounded-none {border-radius: 0rem!important;}
#messagentWrap .rounded {border-radius: 0.25rem!important;}
#messagentWrap .rounded-md {border-radius: 0.5rem!important;}
#messagentWrap .rounded-lg {border-radius: 1rem!important;}
#messagentWrap .rounded-xl {border-radius: 1.5rem!important;}

#messagentWrap .full-block {margin:auto 0px}

@media screen and (max-width: 767px) {
  #messagentWrap .full-block {margin:auto -15px}
}


/**** HELPER CLASSES ****/


#messagentWrap{max-width:995px; margin:0 auto;}

#messagentWrap .bg-lightgrey {background-color: #efefef;}




</style>

