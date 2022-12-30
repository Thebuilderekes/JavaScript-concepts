var counter =  (function (){
 let count = 0;
    // private
 

       function print(message) {
        console.log(message + "----" + count)
    }
      // return an object


      return {

        get: function() {
          return count;
        
        },

        set: function(value) {
            count = value;
          
          }, 

          increment: function() { 
              count += 1;
              print("after increment: ");

          },

         reset: function() {
            print("before reset: " )
            count = 0;
            print("after reset: ")
      }
    }


})();

counter.increment();
counter.increment();
counter.increment();
counter.reset();
counter.set(7);
console.log(counter.get());
counter.reset();

//the idea is to be able to trace wherever you declare any variable and where you keep its value all round the program. WHOLISTICALLY WHY??? SOON TO FIND OUT!