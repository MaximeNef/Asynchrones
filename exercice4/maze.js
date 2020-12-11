const body = document.querySelector("body");
body.className = "body";
let x ;
let y ;
let grosseline = [];
let level = 0



  let mazes =[]
  for(let i = 1; i<5;i++){
      fetch('lvl'+i+'.txt')
      .then(response => response.text())
      .then(response =>{
          mazes.push(response)
          if(i===1){
              generateMaze()
          }
      })
      .catch(error => alert('there was an error : '  + error))
  }  








function generateMaze(){
    const lineArr = mazes[level].split("\n");
    
    for (let i = 0; i <= lineArr.length - 1; i++) {
        grosseline[i]=[]
        const lineDiv = document.createElement('div');
        lineDiv.classList.add('lineDiv');
        lineDiv.id = i
        const line = lineArr[i];
        for (let j = 0; j <= line.length - 1; j++) {
            const characterDiv = document.
            createElement('div');
            grosseline[i][j]=characterDiv
            console.log(grosseline)
            const character = line.split("")
            characterDiv.innerHTML = character[j];
            characterDiv.classList.add('tile');
            lineDiv.appendChild(characterDiv);
            if (characterDiv.innerHTML == "*") {
                characterDiv.classList.add("mur");
                characterDiv.innerHTML = "";
            } else if (characterDiv.innerHTML == ".") {
                characterDiv.classList.add('chemin');
                characterDiv.innerHTML = "";
            } else if (characterDiv.innerHTML == "S") {
                characterDiv.classList.add('start');
                characterDiv.innerHTML = "";
                x=j;
                y=i;
                const balle = document.createElement('div')
                balle.className = "perso"
                characterDiv.appendChild(balle)
            } else if (characterDiv.innerHTML == "T") {
                characterDiv.classList.add('tresor');
                characterDiv.innerHTML = "";
            }
           
        }
        body.appendChild(lineDiv)
    }  
  
} 


 












document.body.addEventListener("keydown", function (e) {
    const perso = document.querySelector(".perso");
  let dest;

  
    if (e.code === "ArrowRight") {
        
        x++;
        dest = grosseline[y][x];
        
        if (dest.classList.contains("mur")) {
          alert("that's a wall!");
          x--;
          dest = grosseline[y][x];
          
          

        }}

   
    if (e.code === "ArrowLeft") {
        x--;
        dest = grosseline[y][x];
        
        if (dest.classList.contains("mur")) {
          alert("that's a wall!");
          x++;
          dest = grosseline[y][x];
        }
    }


    if (e.code === "ArrowUp") {
        y--;
        dest = grosseline[y][x];
       
        if (dest.classList.contains("mur")) {
          alert("that's a wall!");
          y++;
          dest = grosseline[y][x];
        }
    }


    if (e.code === "ArrowDown") {

        y++;
        dest = grosseline[y][x];

        
        if (dest.classList.contains("mur")) {
          alert("that's a wall!");
          y--;
          dest = grosseline[y][x];
        }
    }
    dest.appendChild(perso) 
   
    if (dest.classList.contains("tresor")) { 
        window.setTimeout(
            function () {
                
        dest = grosseline[y][x];
        alert("YYEEAAAAHHHHH LET'S GOO !!!! ");
        x=0
        y=0
        
        body.innerHTML='';
        level++;
        seconds = 0
        minutes = 0
        generateMaze();
    }, 200)
        
      }     
      
})

    
     let seconds = 0;
    let minutes = 0;
    const main = document.querySelector('main')
    const section = document.createElement('section')
    const time = document.createElement('div')
    const p = document.createElement('p');
    p.className = 'timer'
    time.appendChild(p)
    body.appendChild(section)
    body.appendChild(time)
    
    function timer() {
        const para = document.querySelector('p')
        if (seconds >= 0) {
            para.textContent = seconds + ' s'
            if (seconds > 60) {
                    para.textContent = minutes + ' mn ' + (seconds - (minutes * 60)) + ' s'
                    
            }
        }
        if (seconds % 60 === 0 && seconds !== 0) {
            para.textContent = (minutes + 1) + ' mn'
            minutes++
            
        }
        seconds++
    }
    const interval = setInterval(timer, 1000)  

    