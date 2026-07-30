const number = [10, 12, 15, 20, 25];
let sum = 0;
for(num of number){
    // console.log(num);
    const totalNum = num + sum;
    sum = totalNum;

    console.log("After Complete Sub = " + sum);
    
    

};
console.log("Final Sum = " + Sum);
console.log(sum);
