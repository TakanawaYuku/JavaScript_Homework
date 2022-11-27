function getNum(x){

    let resultArray = [];
    for (let n = 2; resultArray.length < x; n++) {
        let check = false;
        for (let resultArrayIndex = 0; resultArrayIndex < resultArray.length; resultArrayIndex++) {
            if (n % resultArray[resultArrayIndex] === 0 && !(n / resultArray[resultArrayIndex] === 1)) {
                check = true
                break;
            }
        };

        if (check === false) {
            resultArray.push(n)
        };

    };

    return resultArray;

};


console.time();
console.log(getNum(process.argv[2]));
console.timeEnd();
