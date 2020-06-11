function isLeapYear(year: number) {
    const yearEnhanced = {
        isDivisibleBy: (n: number) => { return year%n === 0 }
    }
    
    return yearEnhanced.isDivisibleBy(4) && (!yearEnhanced.isDivisibleBy(100) || yearEnhanced.isDivisibleBy(400))
}

export default isLeapYear