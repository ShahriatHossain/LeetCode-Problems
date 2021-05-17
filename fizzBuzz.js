/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var output = [];
    for(var i=1; i<=n; i++) {
        switch(true) {
            case i % 3 === 0 &&  i % 5 === 0:
                output.push("FizzBuzz");
                break;
            case i%3 === 0:
                output.push("Fizz");
                break;
            case i%5 === 0:
                output.push("Buzz");
                break;
            default:
                output.push(i.toString());
                break;
        }
    }
    
    return output;
};

fizzBuzz(15)
// output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]