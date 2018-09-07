arraysAnswers = {
  /**
   * Find the 0 based index of item in arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to find in arr
   * @returns {Number} The index of item in arr, or -1 if item is not in arr.
   */
  indexOf: function indexOf(arr, item) {
    // Implement a function, that returns the 0 based index of an element in an array.

      //loop through arr 
      //set condition to return 0 base index (if)

      for (var i=0; i<arr.length; i++){
        var singles = arr.length[i]
        if(item === singles[0]){
          return singles[i]
        }
        else if( item !== single[0]){
          return '-1'
        }
      }
  },

  /**
   * Determine the sum of the items of arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number} The numerical sum of all items in arr.
   */
  sum: function sum(arr) {
    var total = 0

    for(var i=0; i<arr.length; i++){
      total = total + arr[i]
    }
    return total
  },

  /**
   * Create a new array with the same items as arr, excluding item 
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} A new array containing all numbers from arr except item.
   */
  remove: function remove(arr, item) {

    var newArr = []
    var excludeArr = []

    for(var i=0; i<arr.length; i++){

      var ogArr = arr.length[i]
      if( ogArr === item ){
        excludeArr.push(item)
      }
      else{
        newArr.push(ogArr)
      }
    }
    return newArr

  },

  /**
   * Adds a number, item, to the end of an array, arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be appended to the end of arr
   * @returns {Number[]} The array arr, with item appended.
   */
  append: function append(arr, item) {

    var newArr = []
    var addTo = arr + ',' + item 
    newArr.push (addTo)
    return newArr

  },

  /**
   * Removes a number, item, from the end of an array, arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the last element removed..
   */
  truncate: function truncate(arr) {

    //pop off element to remove
    //pop off the the last element 
    //push remaining arr to new 

    var shorty = []
    var last = shorty.pop(arr[0])
    return shorty

  },

  /**
   * Adds a number, item, to the beginning of an array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to append to the beginning of arr.
   * @returns {Number[]} The array arr, with the first element item added
   */
  prepend: function prepend(arr, item) {


  
  },


  /**
   * Removes the first element from an array
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the first element item removed.
   */
  curtail: function curtail(arr) {


  },

  /**
   * Combines the two arrays arr1 and arr2 together
   * 
   * @param {Number[]} arr1 - An array of numbers
   * @param {Number[]} arr2 - An array of numbers
   * @returns {Number[]} A new array, with elements from arr1 and arr2 in that order.
   */
  concat: function concat(arr1, arr2) {

    var together = arr1 + ',' + arr2
    return together 

  },

  /**
   * Insert a number item into an array arr at the 0 based position index.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be inerted into arr
   * @param {Number} index - A 0 based index into the array arr.
   * @returns {Number[]} The array arr, with the number item inserted at position index.
   */
  insert: function insert(arr, item, index) {

  },

  /**
   * Counts the number of times a number item appears in an array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to count in arr
   * @returns {Number} The count of the number of times the number item appeared in arr.
   */
  count: function count(arr, item) {

      //setup counter 
      //loop through arr
      //set up condition to count item in arr (if)
      //count number of time item is in arr 

    var countNum = 0 
    for (var i=0; i<arr.length; i++){
      if(arr[i] === item){
        countNum = countNum + 1
      } 
    }
    return countNum
  },

  /**
   * Determines the number of duplicated numbers in the array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} An array of numbers that appear in arr more than once.
   */
  duplicates: function duplicates(arr) {

      //setup counter 
      //loop through arr 
      //set up condition for counting number that appear more than once 
      //set up arr to hold repeating number 
      //

      var counter = 0 
      for(var i=0; i<arr.length; i++){
        if(arr[i] === arr[i]){
          counter = counter +1
        }
      }
      return counter
  },

  /**
   * Squares each number in an array arr. Example: square([1, 2, 3]) returns [1, 4, 9].
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} A new array of numbers that contains the elements of arr squared.
   */
  square: function square(arr) {

    var toSquare = []
    for(var i=0; i<arr.length; i++){
      var double = arr[i]*2
      toSquare.push(double)
    }
    return toSquare
  },

  /**
   * Finds the indices of the occurrences of a number target in an array of numbers arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} target - A number to find all occurences of.
   * @returns {Number[]} A new array of numbers which represent the indices of target in arr.
   */
  findAllOccurrences: function findAllOccurrences(arr, target) {

    //loop through arr 
    //set up condition to find all occurences of target (if)
    //push the matched occurences to new arr
    //

    var allOccurencies = []
    count = 0

    for(var i=0; i<arr.length[i]; i++){
      var theArr = arr[i]
      if(theArr === target){
        count = count + 1
        allOccurencies.push(theArr)
      }
    }
    return allOccurencies

  },
};
