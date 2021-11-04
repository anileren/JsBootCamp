function perfectNumbers(num) {
    for (let i = 1; i < num; i++) {
        let total = 0
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                total += j
            }
        }
       
        if (total == i) {
            console.log(i)
        }
    }
}
perfectNumbers(100)