function  receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    return function newAnimal(){

    }
}

function returnsAnAnonymousFunction(){
    return ()=> console.log("Dolphin");
}