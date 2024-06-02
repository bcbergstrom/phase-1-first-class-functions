function receivesAFunction(func){
    func()
    return 0
}
function returnsANamedFunction(){
 const pepsi = para1 => "bepsi";
 return pepsi;
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log("hi")
    }
}