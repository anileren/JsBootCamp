function friendNumbers(num1,num2){
    let top1 = 0;
    let top2 = 0;
    for (let i=0; i < num1; i++){
        if(num1 % i == 0){
            top1 += i
        }
    }
    for (let j=0; j < num2; j++){
        if(num2 % j == 0){
            top2 += j
        }
    }
    if ((num1 == top2) && (num2 == top1)){
        console.log(num1 + " ve " + num2 + " arkadas sayilardir")
    }
    else{
        console.log(num1 +  "ve " + num2 + " arkadas sayi degiller")
    }
}
friendNumbers(220,284)