let xhr = new XMLHttpRequest();
// console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);

  const asiaCountries = data.filter(country => {
    // Check if the country's region is Asia
    return country.region === "Asia";
  });

  console.log(asiaCountries);

  let PopulatedCountries =  data.filter(data =>{
    return data.population >= 200000
  })

  console.log(PopulatedCountries)

  const totalPopulation = data.reduce((total, country) => {
    if (country.population !== undefined && country.population !== null) {
        return total + country.population;
    } else {
        return total;
    }
    }, 0);

  console.log("Total population of all countries:", totalPopulation);


  const countriesWithUSD = data.filter(country => country.currencies && country.currencies.USD);

  const countryNamesWithUSD = countriesWithUSD.map(country => country.name.common);

  for(let i=0; i<countryNamesWithUSD.length;i++){
    console.log(countryNamesWithUSD[i])
  }
 

    data.forEach(country => {
    console.log("Name: ", country.name.common);
    console.log("Capital: ", country.capital[0]);
    console.log("Flag: ", country.flags.png);
    });

};
