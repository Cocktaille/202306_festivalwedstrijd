import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBaseStore = defineStore('baseStore', () => {
    /*get hostname and define the brand*/
    const hostname = ref(window.location.hostname)
    const brandShortName = ref("")
    const brandName = ref("")

    onMounted(() => {

        getBrandName()
    })
    /*get hostname and define the brand*/

function getBrandName() { 

    if (hostname.value === "www.nieuwsblad.be" || hostname.value === "m.nieuwsblad.be" || hostname.value === "preview.nieuwsblad.be" || hostname.value === "previewm.nieuwsblad.be"  ) {
        brandShortName.value = "nb" 
        brandName.value = "nieuwsblad" 
    } else if(hostname.value === "www.gva.be" || hostname.value === "m.gva.be" || hostname.value === "preview.gva.be" || hostname.value === "previewm.gva.be"  ) {
        brandShortName.value = "gva" 
        brandName.value = "gazetvanantwerpen" 
    } else if(hostname.value === "www.hbvl.be" || hostname.value === "m.hbvl.be" || hostname.value === "preview.hbvl.be" || hostname.value === "previewm.hbvl.be"  ) {
        brandShortName.value = "hbvl" 
        brandName.value = "hetbelangvanlimburg" 
    } else  {
        brandShortName.value = "nb" 
        brandName.value = "nieuwsblad" 
    }

}

    const optins =  [
        {
            optinShortname: "Namiddag Update", // voor deze optin moet postcode gevraagd worden
            optinName: "REG_OPTIN_PM",
            optinServCode: "SERV_AC_PM_NEWS",
            optinTekst: "Ja, ik wil graag de dagelijkse namiddagupdate van het Nieuwsblad ontvangen. Je ontdekt er als eerste of jouw favoriete frituur <strong>De Beste Frituur van gemeente</strong> wordt.",
            optinActive: true,
            onlyForNewReg: false,
            zipCodeRequired: true,
            brand: "nb"
        },

        {
            optinShortname: "Regio", // voor deze optin moet postcode gevraagd worden
            optinName: "REG_OPTIN_REGIO",
            optinServCode: "SERV_AC_NB_REGIO",
            optinTekst: "Ja, ik wil op de hoogte blijven van het nieuws uit mijn regio.",
            optinActive: true,
            onlyForNewReg: true,
            zipCodeRequired: true,
            brand: "nb"
        },
        {
            optinShortname: "Commercial",
            optinName: "REG_OPTIN_COMMERCIAL",
            optinServCode: "SERV_AC_NB_COMMERCIAL",
            optinTekst: "Ja, ik wil graag via mail acties en aanbiedingen van het Nieuwsblad ontvangen.",
            optinActive: true,
            onlyForNewReg: true,
            zipCodeRequired: false,
            brand: "nb"
        },
        {
            optinShortname: "Shop",
            optinName: "REG_OPTIN_WEBSHOP",
            optinServCode: "SERV_AC_NB_WEBSHOP",
            optinTekst: "Ik ontvang de nieuwsbrief van Nieuwsbladshop.be: elke week acties  op tickets, elektro, boeken,...",
            optinActive: true,
            onlyForNewReg: true,
            zipCodeRequired: false,
            brand: "nb"
        },
        {
            optinShortname: "NB Partner",
            optinName: "REG_OPTIN_PARTNER",
            optinServCode: "SERV_AC_NB_PARTNER",
            optinTekst: "Ik ontvang graag interessante promoties en acties van partners van het Nieuwsblad.",
            optinActive: true,
            onlyForNewReg: true,
            zipCodeRequired: false,
            brand: "nb"
        },
    ]



    function scrollToTop() {
        window.scrollTo(0,0)
    }
  
    return { brandShortName, brandName, optins, scrollToTop }
  })