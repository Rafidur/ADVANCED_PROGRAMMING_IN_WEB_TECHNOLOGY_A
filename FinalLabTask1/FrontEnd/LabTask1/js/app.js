function getCountry()
{
    let countryId= document.getElementById("cid").value;
    let url = "http://127.0.0.1:8000/api/countries/"+countryId;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let country = data.country;
        document.getElementById("cname").innerHTML = ": " + country.name;
        document.getElementById("ccode").innerHTML = ": " + country.code;
        document.getElementById("ctotal").innerHTML = ": " + country.total_population;
    }
    )
}

function submit()
{
    let countryName = document.getElementById("name").value;
    let countryCode = document.getElementById("code").value;
    let countryPopulation = document.getElementById("population").value;
    let obj = {
        name: countryName,
        code: countryCode,
        population: countryPopulation
    }
    
    let url = "http://127.0.0.1:8000/api/countries";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201) {
            console.log("Country created successfully");
        }
    };
    xhr.send(JSON.stringify(obj));
}

function loadCountries()
{
    let url = "http://127.0.0.1:8000/api/countries";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let countries = data.countries;
        let output = "";
        output += "<table border='1'>";
        output += "<tr><th>Country Name</th><th>Country Code</th><th>Country Population</th></tr>";
        countries.forEach(country => {
            output += "<tr>";
            output += "<td>"+country.name+"</td>";
            output += "<td>"+country.code+"</td>";
            output += "<td>"+country.total_population+"</td>";
            output += "</tr>";
        });
        output += "</table>";
        document.getElementById("data").innerHTML = output;
    }
    )
}