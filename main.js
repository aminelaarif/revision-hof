

//write a function called addOne that takes an array of numbers as an input, and returns a new array with all array elements incremented by one as an output
function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

//Take an array and remove every second element out of that array.
//Always keep the first element and start removing with the next element.
function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}

//write a function called addOne that takes an array of numbers as an input, and returns a new array with all array elements incremented by one as an output
function addOne(array) {
    return map ( array , function(numbers){
        return numbers + 1 
    })
    }


//Take an array and remove every second element out of that array.
//Always keep the first element and start removing with the next element.
    function everyOther(array) {
        return filter(array,function(element , index) {
            return index%2 === 0 
     })
     }

/*****************************  3  ***********************/

     function multiply(array) {
        return map ( array , function(numbers){
            return numbers *2
        })
        }



        function square(array) {
            return map ( array , function(numbers){
                return numbers**2
            })
            }



            function length(array) {
                return map ( array , function(element){
                    return element.length
                })
                }

  /*****************************  4  ***********************/

                function odds(nums) {
                    return filter(nums,function(element){
                        return element%2 === 0
                    })
                   }


                   function positive(nums) {
                    return filter(nums,function(element){
                        return element >=0
                    })
                   }



                   function negative(nums) {
                    return filter(nums,function(element){
                        return element < 0
                    })
                   }



                   function oddLength(nums) {
                    return filter(nums,function(element){
                        return element.length%2 === 0
                    })
                   }


                   function greaterThan6(nums) {
                    return filter(nums,function(element){
                        return element > 6
                    })
                   }


  /*****************************  5  ***********************/

                   function sum(nums) {
                    return reduce(nums,function(acc ,element){
                    return acc = acc + element
                    },0)
                  }



                  function product(nums) {
                    return reduce(nums,function(acc ,element){
                    return acc = acc * element
                    },1)
                  }



                  function onlyEven(nums) {
                    return reduce(nums,function(acc ,element){
                    return   acc&&element%2 !== 0 
                    },true)
                  }



             
                  function elementSquare(nums) {
                    return reduce(nums,function(acc ,element){
                    return   acc = acc +(element**2) 
                    },0)
                  }

  /*****************************  6  ***********************/

                  function each(array1,array2, func) {           // double array each
                    for (var i = 0; i < array1.length; i++) { 
                          func(array1[i],array2[i], i); 
                    } 
              }



              function map(array1,array2, f) {                            //double array map  with double array each
                var acc = []; 
                each(array1,array2, function(element1,element2,i) { 
                      acc.push(f(element1,element2 ,i)); 
                }); 
                return acc; 
          }



          function prodArr(array1,array2) {                                       //product of 2 arrays
            return map(array1,array2,function(element1,element2){
            return element1 * element2
            })
        }

  //*****************************  7***********************

        function filterAge(array){
            return filter (array,function(element){
                return element.grade>=90
           })
        }


        function pushNmae(array){
            return map (array,function(element){
                return element.name
           })
        }





        function avgGrade (array) {
            return reduce (array ,function (acc,element) {
                return acc+element.grade
            },0)
            /array.length
            
        } 



        function onlyA (array){
            return filter(array,function(element){
                return element.grade="A+"
            })
        }

        
