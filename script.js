
function calculer(g, v) {
   // console.log(g,v);
   const ecran = document.querySelector('#ecran');
  
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
         ecran.value = '';
      break;
    case "eg":
        switch (operator) {
           
            case "-" :
                ecran.value = operande1 -ecran.value;
            break;
            
            case "+" :
                 ecran.value = parseInt(operande1)+parseInt(ecran.value) ;
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

  function effacer() {
    ecran.value = 0;
  }

}