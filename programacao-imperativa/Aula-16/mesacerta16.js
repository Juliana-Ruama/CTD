/*function fizzbuzz (num1, num2){
    for let i = 1; i<=100; i++ {
        if ( i % num1 == 0 && i % num2 == 0){
            console.log ("fizzbuzz");
        } else {
            if (i % num1 == 0){
                console.log ("Fizz");
            } else if(i %)
        }
    }
}*/

let fizzOrBuzz = () => {
  for (n = 1; n <= 100; n++) {
    let fizzBuzz = ''
    if (n % 3 == 0) fizzBuzz += 'Fizz'
    if (n % 5 == 0) fizzBuzz += 'Buzz'
    console.log(fizzBuzz || n)
  }
}

fizzOrBuzz()