// function foo(a,b,c,d,e){

// }

// foo(1,2,3,4,5)

function foo(...args){
    
    console.log(...args);
}

foo(1)
foo(1,2)
foo(1,2,3)
foo(1,2,3,4,5,6, 'a', true, 10.25)


function foo2(a, b, ...args){
    console.log(a)
    console.log(b)
    console.log(...args)
}


foo2(1,2,3,4,5,6)