function finMultiples (number,limit){
    const multiples =[];
    for (let i=number; i<=limit; i +=number){
        multiples.push (i);
    }
    return multiples;
}
const cavab1 = finMultiples(2,6);
console.log(cavab1);

const cavab2 = finMultiples(2,30);
console.log(cavab2);