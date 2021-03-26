let pronoun = ['the','our', 'your', 'their'];
let adj = ['great', 'big', 'small', 'minuscule' ];
let noun = ['liar','invention', 'apparatus', 'thing'];
let domain =['.etc', '.com', '.net', '.us'];

function randomDomainGenerator(){
    for( let i = 0; i < pronoun.length; i++){
     for( let j = 0; j < adj.length; j++){
       for( let k = 0; k < noun.length; k++){
          for(let l = 0; l < domain.length; l++){
               let domainName = pronoun[i] + adj[j] + noun[k] + domain[l]
          console.log(domainName)  
        
          }
        }
      }
    }   
  }
randomDomainGenerator();