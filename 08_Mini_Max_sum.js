function miniMaxSum(arr) {
    var n = arr.length 
    arr.sort((a, b) => a - b); 
    var sliceRight = arr.slice(n - n, n - 1) 
    var sliceLeft = arr.slice(n - (n - 1), n)
    var sumMin = sliceRight.reduce((a, b) => a + b)
    var sumMax = sliceLeft.reduce((a, b) => a + b)
    console.log(sumMin + ' ' + sumMax)
}

var a = [3, 1, 5, 7, 9];
miniMaxSum(a); 