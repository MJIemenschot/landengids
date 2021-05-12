// 1 Sla de referentie naar de HTML knop op
const sButton = document.getElementById("search");
//Zet een event-listener (click) op de knop en verwijs naar de functie (searchCountry)
sButton.addEventListener("click",() => {
    searchCountry();

});
//Declareer de functie searchCountry
//Volg de stappen voor het maken van een request om de data over Belgie op te halen
//Vraag 2 en 3 Maak op basis van de response de volgende string en log dit in de console
//Check in de console hoe jouw data eruit ziet (is het een array? Is het een object?)
// Probeer eerst even alle data die je nodig hebt apart in de console te loggen
//Voeg alle data samen tot één string en sla die op in een variabele
async function searchCountry(){
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/name/belgium');
        console.log(result.data[0].name + " is situated in " + result.data[0].subregion + ". It has a population of " + result.data[0].population + " people.");
        console.log("The capital is: " + result.data[0].capital)

        const numberOfCurrencies = result.data[0].currencies.length;//ipv result.data = country
        for(let i = 0; i < numberOfCurrencies; i++){
            if (numberOfCurrencies === 1){
                console.log('You can pay with' + result.data[0].currencies[0].name +'s')
            } else if (numberOfCurrencies === 2) {
                console.log('You can pay with' + result.data[0].currencies[0].name +'s' +  + result.data[0].currencies[0].name +'s')
            }
        }
        const numberOfLanguages = result.data[0].languages.length;
        for (let i = 0; i < numberOfLanguages; i++){
            if (numberOfLanguages === 1 ){
                spokenLanguages = spokenLanguages + result.data[0].languages[i + 1].name
                console.log(spokenLanguages)
            }  else if  (numberOfLanguages ===2 ) {
                spokenLanguages = spokenLanguages + result.data[0].languages[i + 1].name + 'and' + spokenLanguages + result.data[0].languages[i + 2].name
            }

            }

    } catch(error) {
        console.error(error);
    }
};

// Vraag 4 Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt. In een land kunnen één of twee currencies gebruikt worden:

//     1 valuta: and you can pay with [currency]'s 2 valuta's: and you can pay with [currency]'s and [currency]'s

//Declareer een aparte functie die een array van currencies verwacht
// Loop over de array heen en maak op basis van de lengte van de array een string

//Return het resultaat

