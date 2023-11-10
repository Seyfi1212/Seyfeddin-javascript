function myFunc (arr,num){
    ArrayNetice =[];
    for (let i= 0; i <= num; i++) {
        ArrayNetice.push(arr[i]);
    }
    return ArrayNetice;
}
let netice =myFunc ([1,2,3,4,5], 4);
console.log (netice);