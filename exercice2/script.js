const body = document.querySelector('body');

const button = document.createElement("button");
button.innerHTML = "click ici !!"
body.appendChild(button);
pattern = /- ((\w)*(.)?( )?)*/gi;


const async =()=> {fetch('becode.txt') // becode.txt  //becode.json 
.then((response)=>response.text())
.then((text)=>{
    const ul = document.createElement('ul')
    let regexResult = text.match(pattern);
    console.log(regexResult);

    for(let elem of regexResult ){
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



/* button.addEventListener("click", function () {
  console.log("okok");
  const li = document.createElement('li')
    ul.appendChild(li);
  const request = fetch("becode.txt");

  const transforme = request.then((response) => response.text());

  transforme.then((text) => {
    document.body.innerHTML = text;
  });
  console.log(transforme);
});
 */