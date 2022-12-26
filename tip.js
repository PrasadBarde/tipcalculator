const bill = document.getElementById("bills");
const peoples = document.getElementById("peoples");
const tip = document.getElementById("tip");
const Answer1 = document.getElementById("ans1");
const Answer2 = document.getElementById("ans2");

function calculte(){
   const tipAmt =  (parseInt(bill)  * parseInt (tip)/ 100) / parseInt(peoples) ;
   const totalAmt = parseInt(bill) + tipAmt;

   Answer1.innerText = tipAmt;
   Answer2.innerText = totalAmt;
}

function reset(){
    Answer1.innerText = 0;
    Answer2.innerText = 0;
    bill.value = "0";
    peoples.value = "0"; 
    tip.value="custom"  
}