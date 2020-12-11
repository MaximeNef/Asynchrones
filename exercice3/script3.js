const body = document.querySelector('body');

const input = document.createElement("input")
body.appendChild(input);

const button = document.createElement("button");
button.innerHTML = "click ici !!"
body.appendChild(button);

const liste = [{
    pays: "belgique",
    countr: "BE"
    },
    {
        pays: "france",
        countr: "fr"
    },
    {
        pays: "USA",
        countr: "US"
    },
    {
        pays: "JAPON",
        countr: "JP"
    }
]

const selector = document.createElement("select")
body.appendChild(selector)

for (let elem of liste) {
    const paysA = document.createElement("option")
    paysA.value = elem.countr
    paysA.textContent = elem.pays
    selector.appendChild(paysA)
}

const fetchName = (name,country) => {
    return fetch('https://api.agify.io?name=' + name + '&country_id=' + country)
    
}

const asynk = () => {
    let country = selector.value
    let name = input.value
    fetchName(name,country)
        .then(response => response.json())
        .then(json => {
            let responseDiv = document.createElement('div')
            responseDiv.innerHTML =
                "l'age moyen est : " + json.age + "ans; il y a actuellemnt " + json.count + "personnes avec ce prénom, habitant dans ce pays =>" + json.country_id
            document.body.appendChild(responseDiv)
            console.log(json.age)
            console.log(json.count)

        })
        .catch((error) => {
            console.log("there was an error!", error);
        });
}
button.addEventListener("click", asynk)