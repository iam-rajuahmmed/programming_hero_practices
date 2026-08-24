function myArrowFunction(){

}


let myarrow=(a, b, c)=>{

    sum = a + b + c;
    return sum;


}
console.log(myarrow(10, 20, 30));

let myArrow2 = (a, b, c, ...nestArrowSpreeet)=>{
    let sum = 0;
    for(num of nestArrowSpreeet){
        sum += num;

    }
    return a + b + c + sum;

}
console.log(myArrow2(100,700,354, 564, 56, 456, 43, 34532));