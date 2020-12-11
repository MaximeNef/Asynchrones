const body = document.querySelector('body');

const button = document.createElement("button");
button.innerHTML = "click ici !!"
body.appendChild(button);



const async =()=> {fetch('becode.json') // becode.txt  //becode.json 
.then((response)=>response.json())
.then((arrayJson)=>{
    const ul = document.createElement('ul')

    for(let elem of arrayJson ){
        let li = document.createElement("li")
        li.textContent=elem;
        ul.appendChild(li);
    }
    document.body.appendChild(ul)

})
.catch((error)=>{
console.log("there was an error!",error);
});
}
button.addEventListener("click",async)








/* 
let button = document.querySelector("button");
let input = document.querySelector("input");
let select = document.querySelector("select")
let countrySelected

let countries = [
  { country: "Please select a country", code: "*" },
  // { country: "Every country", code: '*' },
  { country: "Belgium", code: "BE" },
  { country: "France", code: "FR" },
  { country: "Italy", code: "IT" },
];

for (let elem of countries){
  let option= document.createElement('option');
  option.innerText=elem.country
  select.appendChild(option)
  option.addEventListener("click", function(){
    countrySelected=elem.code})

}

const fetchName = (name) => {
  return fetch(
    "https://api.agify.io/?name=" + name + "&country_id=" + countrySelected
  );}

const goFetch = () => {
let name = input.value
fetchName(name)
.then(response => response.json())
.then(json => {
  let responseDiv = document.createElement('div');
  responseDiv.innerText =
    "l'âge moyen des personnes avec ce prénom est: " + json.age+" ans. Il y a actuellement "+json.count+" personnes avec ce prénom";
    document.body.appendChild(responseDiv)
  console.log(json.age)
  console.log(json.count)
})
.catch(error => {
  console.log('There was an error!', error)
})
}
button.addEventListener("click", goFetch); */