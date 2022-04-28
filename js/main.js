function sumOnDifference(arr){
    let c = arr.sort((a, b) => b - a)
    let sum = 0
    for(let i = 1; i < c.length; i++){
        sum += c[i-1] - c[i]
    }
    return sum
}

document.write(sumOnDifference([2,10,1]))