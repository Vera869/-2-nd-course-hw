
 function gameMonth () {
   let monthNumber = Number(prompt("Укажите номер месяца"));
   if (monthNumber < 0 || monthNumber > 13) {
      console.log("Номер месяца введён не корректно!");
   } else {
      if (monthNumber === 12 || monthNumber < 3) {
         console.log("Зима");
      } else {
         if (monthNumber >=3 && monthNumber <= 5) {
            console.log("Весна");
         } else {
            if (monthNumber >=6 && monthNumber <= 8) {
               console.log("Лето");
            } else {
               console.log("Осень");
            }
         }
      }
   }
 }

