var operande1 = '0';
var operande2 = '';
var operator = '+';
var test = false;
function calculer(g, v) {
   
   const ecran = document.querySelector('#ecran');
   switch (g) {
    case "ch":
        if(test) {
          ecran.value = "";
          test = false;
        }
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
         calculer("eg");
         operande1 = ecran.value;
         operator = v; 
         test = true;
        
      break;
    case "eg":
        switch (operator) {
           
            case "-" :
                ecran.value = operande1 - ecran.value;
            break;
            
            case "+" :
                 ecran.value = ecran.value*1 + parseFloat(operande1);
            break;
            
            case "x" :
                ecran.value = operande1 * ecran.value;
            break;

            case "/" :
                ecran.value = operande1 / ecran.value;
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