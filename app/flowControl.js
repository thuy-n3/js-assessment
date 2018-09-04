flowControlAnswers = {
  /**
   * Returns a string, that is either fizz, buzz, or fizzbuzz depending on a number num.
   * 
   * If the number is divisible by 3, the function should return 'fizz';
   * If the number is divisible by 5, the function should return 'buzz';
   * If the number is divisible by 3 and 5, the function should return 'fizzbuzz';
   * Otherwise the function should return the number.
   * If no number was provided or the value was not a number , return false.
   * 
   * @param {Number} num - A number used to determine the result
   * @returns {String} The string 'fizz', 'buzz', or 'fizzbuzz'
   */
  fizzBuzz: function fizzBuzz(num) {
    if(num === num%3 && num !== num%5){
      return 'fizz'
    }
    if(num === num%5 && num !== num%3){
      return 'buzz'
    }
    if(num === num%3 && num%5){
      return 'fizzbuzz'
    }
    if(num !== num%3 && num%5){
      return num
    }
    return false

  },
};
