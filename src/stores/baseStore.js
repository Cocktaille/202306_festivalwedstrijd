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
            "naam": "Pukkelpop",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_pukkelpop.svg",
            "dagen": [
                {
                    "dag": "Vrijdag 18/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_18.svg",
                    "ticketName": "pkp_18"
                },
                {
                    "dag": "Zaterdag 19/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_19.svg",
                    "ticketName": "pkp_19"
                },
                {
                    "dag": "Zondag 20/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_20.svg",
                    "ticketName": "pkp_20"
                }
            ]
        },
        {
            "week": 1,
            "naam": "Lokerse Feesten",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_lokersefeesten.svg",
            "dagen": [
                {
                    "dag": "Vrijdag 4/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_04.svg",
                    "ticketName": "lokerse_4"
                },
                {
                    "dag": "Zaterdag 5/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_05.svg",
                    "ticketName": "lokerse_5"
                },
                {
                    "dag": "Zondag 6/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_06.svg",
                    "ticketName": "lokerse_6"
                },
                {
                    "dag": "Vrijdag 7/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_07.svg",
                    "ticketName": "lokerse_7"
                },
                {
                    "dag": "Zaterdag 8/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_08.svg",
                    "ticketName": "lokerse_8"
                },
                {
                    "dag": "Zondag 9/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_09.svg",
                    "ticketName": "lokerse_9"
                },
                {
                    "dag": "Vrijdag 10/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_10.svg",
                    "ticketName": "lokerse_10"
                },
                {
                    "dag": "Zaterdag 11/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_11.svg",
                    "ticketName": "lokerse_11"
                },
                {
                    "dag": "Zondag 12/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_12.svg",
                    "ticketName": "lokerse_12"
                },
                {
                    "dag": "Zondag 13/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_13.svg",
                    "ticketName": "lokerse_13"
                }
            ]
        },
        {
            "week": 1,
            "naam": "Rammstein",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_rammstein.svg",
            "dagen": [
                {
                    "dag": "Vrijdag 4/8",
                    "ico": "",
                    "ticketName": "rammstein"
                }
            ]
        },
        {
            "week": 1,
            "naam": "Afro Latino",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_afrolatino.svg",
            "dagen": [
                {
                    "dag": "Vrijdag 7/7",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juli/ico_cal_aug_07.svg",
                    "ticketName": "afrolatino_7"
                },
                {
                    "dag": "Vrijdag 8/7",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juli/ico_cal_aug_08.svg",
                    "ticketName": "afrolatino_8"
                },
                {
                    "dag": "Vrijdag 9/7",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juli/ico_cal_aug_09.svg",
                    "ticketName": "afrolatino_9"
                }
            ]
        },
        {
            "week": 1,
            "naam": "Dranouter",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_dranouter.svg",
            "dagen": [
                {
                    "dag": "Vrijdag 4/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juli/ico_cal_aug_04.svg",
                    "ticketName": "afrolatino_4"
                },
                {
                    "dag": "Vrijdag 5/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juli/ico_cal_aug_05.svg",
                    "ticketName": "afrolatino_5"
                },
                {
                    "dag": "Vrijdag 6/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juli/ico_cal_aug_06.svg",
                    "ticketName": "afrolatino_6"
                }
            ]
        },
        {
            "week": 1,
            "naam": "Live /s Live",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_liveislive.svg",
            "dagen": [
                {
                    "dag": "Zaterdag 24/6",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juli/ico_cal_aug_24.svg",
                    "ticketName": "liveislive_24"
                },
                {
                    "dag": "Zaterdag 25/6",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juli/ico_cal_aug_25.svg",
                    "ticketName": "liveislive_25"
                }
            ]
        },
        {
            "week": 1,
            "naam": "Paradise City",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_paradisecity.svg",
            "dagen": [
                {
                    "dag": "Zaterdag 30/6",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_30.svg",
                    "ticketName": "paradise_30"
                },
                {
                    "dag": "Zaterdag 1/7",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juli/ico_cal_aug_01.svg",
                    "ticketName": "paradise_1"
                }
            ]
        },
        {
            "week": 1,
            "naam": "Nostalgie Beach",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_nostalgiebeach.svg",
            "dagen": [
                {
                    "dag": "Vrijdag 4/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_04.svg",
                    "ticketName": "nostalgie_4"
                },
                {
                    "dag": "Zaterdag 5/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/aug/ico_cal_aug_05.svg",
                    "ticketName": "nostalgie_5"
                }
            ]
        },
        {
            "week": 1,
            "naam": "Cactus",
            "logo": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/logos/logo_cactusfestival.svg",
            "dagen": [
                {
                    "dag": "Vrijdag 7/7",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juli/ico_cal_aug_07.svg",
                    "ticketName": "cactus_7"
                },
                {
                    "dag": "Zaterdag 8/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juli/ico_cal_aug_08.svg",
                    "ticketName": "cactus_8"
                }
                ,
                {
                    "dag": "Zondag 9/8",
                    "ico": "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/juli/ico_cal_aug_09.svg",
                    "ticketName": "cactus_9"
                }
            ]
        },
    ])


    const iconsForOneDay = [
        "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/main/ico_1.svg", 
        "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/main/ico_2.svg", 
        "https://www.nieuwsblad.be/extra/static/2023/202307_festivaltickets/img/icons/main/ico_3.svg"
    ]


    //load vragen
    onMounted(() => {
        fetch("https://opensheet.elk.sh/1gL6fNI2jnzIAsdr4t6gBmhMoPPAWMJXwjQVn5_zWs3E/Blad1")
        .then(response => response.json() )
            .then(data => {
                vragenAll.value = data
            });
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

        fetch("https://interactief2.nieuwsblad.be/WedstrijdCR/WedstrijdCR.aspx?ID=vHKtqpyiYtNtbeyk3SIM80zhdy8uZSDO0HUqUbW2%2B7cBNBuEP5Auo6avQtvgcZ80jSRa8zyLstZ4iI&notags=1&mail=" + userMail.value + "&ticket_keuze=" + ticketName + "&festival_keuze=" + festivalName)
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
        vragenAll, 

        chooseFestival, 
        userFestivalChosen, 

        chooseFestivalDay, 
        iconsForOneDay,
        chooseIcon ,
        userMail
    }
  })