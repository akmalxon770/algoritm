const array =  [123, [43, [2345, [345678, [45678, [345]]]]]]
const flatten = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            let moreFlat = flatten(arr[i]);
            newArr = newArr.concat(moreFlat);
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(flatten(array));



const arreyNext = [1, 2, 3, 4, 5, 6, 7]
let reduceArreyNext = arreyNext.reduce((a, b) => {
    return a + b
})
console.log(reduceArreyNext);



const max = [1234, 3, 5656, 23, 3, 54, 4]
console.log(Math.max(...max))



const old = [123, 43, 54, 65, 84, 45]
let ans = old.sort((a,b)=>{
    return (a & 1)-(b & 1)
})
console.log(ans);