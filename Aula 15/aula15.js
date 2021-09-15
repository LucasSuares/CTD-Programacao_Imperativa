const fizzBuzz = (numA, numB) => {

    let n = 1;

    while (n <= 100) {
        if(n % numA == 0 && n % numB == 0){
            console.log("FizzBuzz");
        }else if(n % numB == 0){
            console.log("Buzz");
        }else if(n % numA == 0){
            console.log("Fizz");
        } else {
            console.log(n);
        }
        n++;
    }
}

fizzBuzz (3, 5);

