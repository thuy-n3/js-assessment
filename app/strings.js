stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */

    //loop through string
    //set countdition to count adjacent repeats
    //count repeatings letters
    //make holder strings for letters that repeating 
    //push repeating letters to holder string 

  reduceString: function reduceString(str, amount) {

    var shortString = ''

    for(var i=0; i<str.length; i++){
      var singles = str[i]
      var counter = 0 
      if( singles === amount ){
        counter = counter + 1
      }
    }


    

 
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    var rString = ''
    for(var i=str.length-1;i>=0;i--){

      var newString = str[i]
      rString = rString + newString 

    }
    return rString
  },
};
