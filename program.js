//PRIME NUMBER PROGRAM

function findPrimeNumber(num)
{
    let halfOfNumber=num/2
    let isPrimeNumber=true
    for (let i = 2; i < halfOfNumber; i++) {
        if (num%i==0) {
            isPrimeNumber=false
            console.log("number",num, "is not prime");
            break
        } 
        
    }
    if (isPrimeNumber==true) {
        console.log("number",num, "is prime");
    }

}

function sumOfFibbonaciNumbers(num)
{
    if (num===0) {
        //console.log(0)
        return 0
    }
    if (num===1) {
       // console.log(1);
       return 1
    }
    else{
        let previousNumber=0
        let presentNumber=1
        let additionOfFibbonaciNumbers =0
        let sumOfNumber=0
        for (let i = 2; i <= num; i++) {

            sumOfNumber=presentNumber+previousNumber
            additionOfFibbonaciNumbers+=sumOfNumber
            previousNumber=presentNumber
            presentNumber=additionOfFibbonaciNumbers
        
        }

        console.log(sumOfNumber);
        
    }
     
     

}




