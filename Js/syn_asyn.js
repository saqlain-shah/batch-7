// synchronous 
// synchoronous is a single threaded language which means program run one by one


console.log("Synchronous");
function first(){
    console.log("first");
}
function second(){
    console.log("second");
}
function third(){
    console.log("third");
}

first();
second();
third();

// Asynchronous is mutiple threaded language which means program run parallaly

console.log("Asynchronous")

function first1(){
    console.log("first");
}
function second1(){
    setTimeout(()=> {
        console.log("second");
    },1000)
   
}
function third1(){
    console.log("third");
}

first1();
second1();
third1();