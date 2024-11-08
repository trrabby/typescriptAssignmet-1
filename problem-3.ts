
{
    const countWordOccurrences = (sentence: string, word: string): number => {
        const splittedWordsArr = sentence.toLowerCase().split(' ')
        return splittedWordsArr.filter((splittedWord) => word.toLowerCase() === splittedWord).length
        // console.log(words)
    }

    console.log(countWordOccurrences("I love typescript typescript", "typeSCriPt"))
}
