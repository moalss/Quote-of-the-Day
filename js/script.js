let feld=[{author: 'Jim Rohn', 
quote: 'Beware of what you become in pursuit of what you want.'
},
{author: 'Epictetus', 
quote: 'It\'s not what happens to you, but how you react to it that matters.'
},
{author: 'Frank Sinatra', 
quote: 'The best revenge is massive success.'
},
{author: 'Wayne Gretzy', 
quote: 'You miss 100% of the shots you don\'t take.'
},
{author: 'Nelson Mandela', 
quote: 'Resentment is like drinking poison and waiting for your enemies to die.'
},
{author: 'Elbert Hubbard', 
quote: 'Do not take life too seriously. You will not get out alive.'
},
];
    
let checked=[];
let rand
function checkValue(){
    
      rand=Math.floor( Math.random()* feld.length); 
    checked.push(rand);
    while(checked.indexOf(rand)!==-1){
      rand=Math.floor( Math.random()* feld.length); 
      checked.pop(); 
    }
    return true;    
}

function change(){
   if(checkValue()){
       document.getElementById("quote").textContent = `"${feld[rand].quote}"`;
       document.getElementById("author").textContent = `--${feld[rand].author}`;
   }
 rand=Math.floor( Math.random()* feld.length);
    document.getElementById("quote").textContent = `"${feld[rand].quote}"`;
      document.getElementById("author").textContent = `--${feld[rand].author}`;
}

