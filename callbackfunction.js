function show(i){
console.log("hello js"+" :"+i)
}

function add(a,b,c,callbackfunction){
let result=a+b+c

callbackfunction(result)

}

add(2,3,4,show)