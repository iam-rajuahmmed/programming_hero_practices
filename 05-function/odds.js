const odds = [10, 8, 3, 5, 7];

for(num of odds){
    // console.log(num);
}



let number = [50, 50, 30, 40 ,30, 15];

function myNum(array){
    console.log(array);

    let sum = 0;
    for(number of array){
        let num2 = sum + number;
        sum = num2;
        console.log("After Complete Sub = " + num2);
    }
    console.log("Final Sum = " + sum);
    return sum;
}
myNum(number);