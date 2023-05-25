calculate = () =>{
    let num1 = +document.getElementById("inputOne").value;
    let num2 = +document.getElementById("inputTwo").value;

    let opStr = document.getElementById("operation").value;


   let ans = 0;
   if(opStr === "Plus"){
    ans = num1 + num2;
   }
   else if(opStr === "Minus"){
    ans = num1-num2;
   }
   else if(opStr === "Times"){
    ans = num1*num2;
   }
   else if(opStr === "Divide"){
    ans = num1/num2;
   }

   console.log("The answer is "+ans)
   alert("The answer is "+ans);

   let form = document.getElementById("calcForm");
   form.reset();
}



