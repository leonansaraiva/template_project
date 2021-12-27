function range (a, b, s=1) {

    const nums = []

    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b
    const step = n1 <= n2 ? Math.abs(s): -Math.abs(s)

    for(let i = n1; n1 <= n2 ? i <= n2: i >= n2; i += step) {
        nums.push(i) 
    }

    return nums
}

module.exports =  range