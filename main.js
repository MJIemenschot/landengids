// 1 Sla de referentie naar de HTML knop op
//8
const form = document.querySelector('#search-form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    if (e.key === 'Enter'){searchCountry();}
   //const searchTerm = form.elements.input.value;
    form.elements.input.value = ''
})
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
        const query = form.elements.input.value;
        const result = await axios.get(`https://restcountries.eu/rest/v2/name/${query}`);//${query}`);
        console.log(result);
        const country = result.data[0];

        console.log(country.flag);
        console.log(result.data[0].flag);
        const countryFlag = document.getElementById('country-flag');
        const flagImage = document.createElement('ímg');
        flagImage.setAttribute('src', 'country.flag')//('src', `https://restcountries.eu/data/bel.svg`)
        countryFlag.appendChild(flagImage);

        // display de naam van het land
        let countryTitle = country.name;
        const countryT = document.getElementById('country-title');
        const title = document.createElement('h1');
        title.textContent = countryTitle;
        countryT.appendChild(title);
        // display de algemene info van het land
        const countryInfo = country.name +  " is situated in " + country.subregion +"." +"\n " + "It has a population of " + country.population  + " people." + "\n" + "The capital is: " + country.capital;
        const countryI = document.getElementById('country-info');
        const generalInfo = document.createElement('p');
        generalInfo.innerText = countryInfo;
        countryI.appendChild(generalInfo);
        //console.log(country.name + " is situated in " + country.subregion + ". It has a population of " + country.population + " people.");
        // 3
        // Vraag 4 Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt.
        // In een land kunnen één of twee currencies gebruikt worden:

        //Declareer een aparte functie die een array van currencies verwacht
        function countryCurrencies(){
            const numberOfCurrencies = country.currencies.length;
            let countryCurrency = [];
            if (numberOfCurrencies === 1) {
                countryCurrency = 'You can pay with ' + country.currencies[0].name + 's';
            } else if (numberOfCurrencies === 2) {
                countryCurrency = 'You can pay with ' + country.currencies[0].name + 's' + country.currencies[0].name + 's';
                //Return het resultaat
            } return countryCurrency
        };

        // display de munteenheden van het land
        const currencyInfo = countryCurrencies();
        const currency = document.getElementById('currency-c');
        const currencyI = document.createElement('p');
        currencyI.textContent = currencyInfo;
        currency.appendChild(currencyI);

        // ## Bonusopdracht: Maak een functie die ongeacht het aantal talen die in een land gesproken worden, een string maakt:
        // 1. Declareer een functie die een array van talen verwacht (strings)
        function languagesSpoken() {
            let spokenLanguages = [];
            const numberOfLanguages = country.languages.length;
            if (numberOfLanguages === 2){
               spokenLanguages = "They speak: " +  country.languages[0].name + ' and ' + country.languages[1].name
                } else if  (numberOfLanguages === 3) {
                  spokenLanguages = "They speak: " +   country.languages[0].name + ', ' + country.languages[1].name + ' and ' + country.languages[2].name;
                } else {spokenLanguages ="They speak: " +  country.languages[0].name;
                   // 3. Return het resultaat
                 } return spokenLanguages;
       }
        // display de talen van het land
        const languageInfo = languagesSpoken();
        const language = document.getElementById('language-c');
        const languageI = document.createElement('p');
        languageI.textContent = languageInfo;
        language.appendChild(languageI);


    } catch(e) {
        console.log("Error", e);
        //display Errormessage
        // const errorMessage = ("ongeldige invoer", e);
        // const errorC = document.getElementById('country-info')
        // const errorT = document.createElement('h2');
        // errorT.textContent = errorMessage;
        // errorC.appendChild(errorT);
    }
};

searchCountry();
// const countryInfo = document.getElementById('country-info');
// const info = document.createElement('p');
// info.setAttribute('çlass', 'info-box');
// info.textContent = languagesSpoken();
// countryInfo.appendChild(info);
// 4. Test of dit werkt door vanuit de `searchCountry` functie deze functie aan te roepen en hieraan de languages van belgie mee te geven!

//     ## Vraag 7. Zorg ervoor dat de opgehaalde data op de volgende manier wordt toegevoegd aan de DOM
// 1. Maak een container element in de HTML

// 2. Sla de referentie (getElementById) op in de JS
// 3. Maak een image-element in JS
// 4. Maak een h1-element in JS
// 5. Maak nog drie p-elementen voor de beschrijvende tekst in JS
// 6. Stop de strings die je met bovenstaande functies hebt gegenereerd als `textContent` op de tekst-elementen
// 7. Zet een `src`-attribuut op het image-element met de waarde van de link naar het vlaggetje (en een `alt`!)
// 8. Voeg de elementen één voor één toe aan het container-element met `appendChild`
//
// ## Om een request te kunnen maken hebben we nodig:
//     - Kijk naar welk endpoint/uri wij een request willen maken en wat voor soort request hebben we nodig?
//     - Installeer axios
//     - Importeer axios
// - Maak een asynchrone functie
// - Maak een variabele waarin, met het `await` keyword een axios GETrequest wordt gemaakt naar het juiste endpoint
// - Check yourself before you wreck yourself! Wat krijgen we terug? Log het in de console!
//     - Doe iets met de data (opslaan in variabele o.i.d.)
// - Kijk hoe je de juiste data uit de response krijgt
// - Maak een try / catch blok met alle voorgaande code in de try.
//
