let counter = 0;


function timeOut() {
    setTimeout ( function () {0
        console.log("hello " + counter++)

        timeOut()
    } , 2000)
}

timeOut();