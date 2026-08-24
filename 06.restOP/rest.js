function sumition(a, b, c, ...totalNew){

    sum = 0;
    for (sumi of totalNew){
        sum += sumi;
    }
    return a + b + c + sum;

}

console.log(sumition(10, 20, 50, 200, 500, 700, 600, 20, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000));
