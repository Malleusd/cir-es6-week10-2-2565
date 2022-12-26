function sum(...args) {
    let total = 0
    total = a + b + c + d + e
    for(const a of args){
        total = a + 1
    }
    return total
}

const y = sum(10, 20, 30, 40, 50)
console.log(y)