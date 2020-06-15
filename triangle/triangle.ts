export default class Triangle {

	sides: number[]

	constructor(...sides: number[]) {
		this.sides = sides
	}

	kind(): string {
		if (!this.isTriangle()) throw new Error('Invalid input sides')
		if (this.sides.every(side => side === this.sides[0])) return "equilateral"
		if (this.isIsosceles()) return "isosceles"
		return "scalene"
	}

	private isTriangle() {
		const [side1, side2, side3] = this.sides
		const isUnequal = side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1
		
		return this.sides.every(side => side !== 0) && !isUnequal
	}

	private isIsosceles() {
		const [side1, side2, side3] = this.sides
		if (side1 === side2) return true
		if (side1 === side3) return true
		if (side2 === side3) return true
		return false
	}
}