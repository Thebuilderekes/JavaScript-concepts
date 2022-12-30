function buildFunction() {
var arr = [];
for ( var i = 0; i < 3; i++){
   let j = i // if you want it to log 0, 1, 2 console.log(j) instead of i
    arr.push(
        function(){
            console.log(i);
        }
    )

}

return arr;
}


var fs = buildFunction();

fs[0]();
fs[1]();
fs[2]();
