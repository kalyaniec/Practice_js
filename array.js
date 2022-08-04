let arr=[10,30,40,20,a={adress:"B704",
    phone:900}]



//arr.splice(2) //deletes everything from index 2, if given 2,3 would delete from index 2 , 3 elements 
arr.splice(1,0,20)
let l1={
    adress :20
}

let l2={
    address:30
}
arr.push(l1)
arr.unshift(l2)
console.log(arr)


//console.log(arr.length)
let a1=[2,3,4]
//let a2=[4,5,6]
let a2=a1
console.log(a1)
a1.push(10)
console.log(a2)