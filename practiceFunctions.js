function makeSomething(product, name){

    return function something(){

        console.log(`I made ${product} from ${name}`)
    }
}

let chocoBread = makeSomething("chocolate bread", "bread")
let donot = makeSomething("donot", "flour")

chocoBread()
donot()
