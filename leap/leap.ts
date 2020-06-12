function isLeapYear(year: number) {
    const yearEnhanced = enhanceYear(year)
    
    return yearEnhanced.isDivisibleBy(4) && (!yearEnhanced.isDivisibleBy(100) || yearEnhanced.isDivisibleBy(400))
}

export function enhanceYear(year: number) {
    return { 
		isDivisibleBy: (n: number) => { return year%n === 0 } 
	}
}

export default isLeapYear