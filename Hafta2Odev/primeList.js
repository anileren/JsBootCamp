let min = 2;//min asal sayi 2 oldugundan, böyle baslattim
let max = 1000;
while(min <= max)
{
    let i = 0;  
    for(let j = 2; j < min; j++)
    {
        if(min % j == 0){      
            i = 1;  
            break;
        }
    }
    if(i == 0)  
        console.log(min);  
    min++;
}