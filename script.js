var operande1 = '';
var operande2 = '';
var operator = '';
function calculer(g, v) {
   
   const ecran = document.querySelector('#ecran');
    if(v == '=') {

      //Recuperer l'index de l'operateur utilisé (x,+,-,/)
      var index = ecran.value.indexOf(operator);

      //extraire la chaine à partir de l'index+1 = operande2
      operande2 = ecran.value.substr(index+1)
    }
   switch (g) {
    case "ch":
        if(ecran.value == '0') ecran.value = '';
        ecran.value += v;
        
      break;
    case "dec":
         
        if(ecran.value != 0){
           if(ecran.value.indexOf('.') == -1) 
              ecran.value += '.';
        }
      break;
    case "op":
         operande1 = ecran.value;
         operator = v; 
         ecran.value += v
      break;
    case "eg":
        switch (operator) {
           
            case "-" :
                ecran.value = operande1 - operande2;
            break;
            
            case "+" :
                 ecran.value = parseFloat(operande1)+parseFloat(operande2) ;
            break;
            
            case "x" :
                ecran.value = operande1 * operande2;
            break;

            case "/" :
                ecran.value = operande1 / operande2;
            break;
        }
      break;
    case "sp":
      effacer();
      break; 
  }
}

function effacer() {
  ecran.value = 0;
}