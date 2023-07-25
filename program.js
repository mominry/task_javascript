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


function findCountOfEvenOddZero(...x) {
    let CountOfEven=0
    let CountOfOdd=0
    let CountOfZero=0

    for (let i = 0; i < x.length; i++) {
        
        if (x[i]%2==0&&x[i]!=0) {
            CountOfEven=CountOfEven+1
        }
        else if(x[i]%2==1){
            CountOfOdd++
        }
        else
        {
            CountOfZero++
        }

        
        
        
    }

    console.log("count of odd :",CountOfOdd," count of even :",CountOfEven," count of zero :",CountOfZero);

}

findCountOfEvenOddZero(0,2,4,6,13,9);





