{
    const sumArray = (numbers: number[]): number => {
        const sumOfArr = numbers.reduce((sum, num) => sum + num, 0)
        return sumOfArr
    }
    console.log(sumArray([1, 2, 3, 4, 5]))
}