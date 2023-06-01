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
        // {
        //     optinShortname: "Namiddag Update", // voor deze optin moet postcode gevraagd worden
        //     optinName: "REG_OPTIN_PM",
        //     optinServCode: "SERV_AC_PM_NEWS",
        //     optinTekst: "Ja, ik wil graag de dagelijkse namiddagupdate van het Nieuwsblad ontvangen. Je ontdekt er als eerste of jouw favoriete frituur <strong>De Beste Frituur van gemeente</strong> wordt.",
        //     optinActive: true,
        //     onlyForNewReg: false,
        //     zipCodeRequired: true,
        //     brand: "nb"
        // },

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
            onlyForNewReg: false,
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


    const currentScreen = ref(0)
    




    //define festivals

    const festivals = ref([
        

        {
            "week": 1,
            "naam": "Paradise City",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_paradisecity.svg?v2",
            "dagen": [
                {
                    "dag": "",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_30.svg?v2",
                    "ticketName": "paradise_combi",
                    "type": "combiticket"
                }
            ]
        },

        {
            "week": 1,
            "naam": "Live /s Live",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_liveislive.svg?v2",
            "dagen": [
                {
                    "dag": "Zaterdag 24/6",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juni/ico_cal_aug_24.svg?v2",
                    "ticketName": "liveislive_24",
                    "type": "dagticket"
                },
                {
                    "dag": "Zondag 25/6",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juni/ico_cal_aug_25.svg?v2",
                    "ticketName": "liveislive_25",
                    "type": "dagticket"
                }
            ]
        },

        {
            "week": 1,
            "naam": "Cactusfestival",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_cactusfestival.svg?v2",
            "dagen": [

                {
                    "dag": "Zaterdag 8/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juli/ico_cal_aug_08.svg?v2",
                    "ticketName": "cactus_8",
                    "type": "dagticket"
                }

            ]
        },

        {
            "week": 1,
            "naam": "Afro Latino Festival",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_afrolatino.svg?v2",
            "dagen": [
                {
                    "dag": "",
                    "ico": "",
                    "ticketName": "afrolatino__combi",
                    "type": "combiticket"
                }
            ]
        },

        {
            "week": 1,
            "naam": "Lokerse Feesten",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_lokersefeesten.svg?v2",
            "dagen": [
                {
                    "dag": "Zaterdag 5/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_05.svg?v2",
                    "ticketName": "lokerse_5",
                    "type": "dagticket"
                },
                {
                    "dag": "Zondag 6/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_06.svg?v2",
                    "ticketName": "lokerse_6",
                    "type": "dagticket"
                },
                {
                    "dag": "Zondag 9/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_09.svg?v2",
                    "ticketName": "lokerse_9",
                    "type": "dagticket"
                },
                {
                    "dag": "Zaterdag 11/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_11.svg?v2",
                    "ticketName": "lokerse_11",
                    "type": "dagticket"
                },
                {
                    "dag": "Zondag 12/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_12.svg?v2",
                    "ticketName": "lokerse_12",
                    "type": "dagticket"
                }
            ]
        },

        {
            "week": 2,
            "naam": "Rammstein",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_rammstein.svg?v2",
            "dagen": [
                {
                    "dag": "Vrijdag 4/8",
                    "ico": "",
                    "ticketName": "rammstein_4/8",
                    "type": "dagticket"
                }
            ]
        },

        {
            "week": 2,
            "naam": "Nostalgie Beach Festival",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_nostalgiebeach.svg?v2",
            "dagen": [
                {
                    "dag": "",
                    "ico": "",
                    "ticketName": "nostalgie_combi",
                    "type": "combiticket"
                }
            ]
        },

        {
            "week": 2,
            "naam": "Dranouter",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_dranouter.svg?v2",
            "dagen": [
                {
                    "dag": "Vrijdag 4/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juli/ico_cal_aug_04.svg?v2",
                    "ticketName": "dranouter_4",
                    "type": "dagticket"
                }
            ]
        },

        


        {
            "week": 2,
            "naam": "Pukkelpop",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_pukkelpop.svg?v2",
            "dagen": [
                {
                    "dag": "",
                    "ico": "",
                    "ticketName": "pukkelpop_combi",
                    "type": "combiticket"
                }
            ]
        },
        
        
        
        
        
        
        
    ])

    const festivalsPerWeek = computed(() => {
        return festivals.value.filter(item => item.week === week.value);
      });


    const iconsForOneDay = [
        "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/main/ico_1.svg", 
        "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/main/ico_2.svg", 
        "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/main/ico_3.svg"
    ]

    const week = ref(0)

    //load vragen
    onMounted(() => {
        fetch("https://opensheet.elk.sh/1gL6fNI2jnzIAsdr4t6gBmhMoPPAWMJXwjQVn5_zWs3E/Blad1")
        .then(response => response.json() )
            .then(data => {
                vragenAll.value = data
            });

        // Create a target date
        const targetDate = new Date('2023-06-12'); //moet op de dag staan wanneer de tweede week start

        // Get the current date
        const currentDate = new Date();

        // Compare the current date with the target date
        if (currentDate > targetDate) {
            week.value = 2
        } else {
            week.value = 2
        }

        
    })

    const vragenAll = ref([])


    function chooseFestival(festival) {
        userFestivalChosen.value = festival
        currentScreen.value++
    }
    const userFestivalChosen = ref([])

    const userMail = ref("")

    function chooseFestivalDay(ticketName, festivalName) {
        // alert(ticketName)

        const messagentId = "Tknz84i7AAVU4TZwXXMZ3zleBw0QvuwBUELUeykXsYEVHUWO%2B46NgNN7Xa8dsg6DeyuympYB0OHWDU" // test SP
        //const messagentId = "vHKFwPaQ97YtmJ5d0ImbbaPz%2BNYt3waMo%2Bd4V6ne1Z20prulNUNaOiNlEunTbnME2LnKmN5jZrZXS8" // old

        fetch("https://interactief2.nieuwsblad.be/WedstrijdCR/WedstrijdCR.aspx?ID=" + messagentId + "&notags=1&mail=" + userMail.value + "&ticket_keuze=" + ticketName + "&festival_keuze=" + festivalName)
        .then(response => {
            if (response.ok) {
                
                return response.text().then(text => ({ status: response.status, text }));
                
            } else {
                throw new Error('Network response was not OK');
            }
        })
        .then(data => {
            const cb = data.text
            console.log(cb)
            if(cb.trim() == 'ticket_won') {
                console.log('Gewonnen!')
                currentScreen.value = 4
            }
            else {
                console.log('Niet gewonnen')
                currentScreen.value = 5
            }
            //showLoaderSpinner.value = false
            
        })
            
        .catch(error => console.error(error));
    }



    function chooseIcon() {
        alert("icoon")

        
    }
  
    return { 
        brandShortName, 
        brandName, 
        optins, 
        scrollToTop, 

        currentScreen, 
        festivals, 
        festivalsPerWeek,
        vragenAll, 
        week,

        chooseFestival, 
        userFestivalChosen, 

        chooseFestivalDay, 
        iconsForOneDay,
        chooseIcon ,
        userMail
    }
  })