

function sum(num1, num2, num3){
    const arry = Array(num1, num2, num3);
    // console.log(arry);
    sum =  0;
    for(num of arry){
        const totalNum = num + sum;
        sum = totalNum;
        console.log("After Sum = " + sum);
    }
    console.log("After Complete Sub = " + sum);
    return sum;
    
}
// console.log(sum(5, 10, 15));
console.log("Final Sum = " + sum(5, 10, 15));