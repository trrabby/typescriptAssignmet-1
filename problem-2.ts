
{
    const removeDuplicates = (numbers: number[]): number[] => {
        let newArr: number[] = [];
        numbers.map((num) => {
            if (newArr.includes(num)) {
                return
            }
            else newArr.push(num)
        })
        return newArr
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))

}
