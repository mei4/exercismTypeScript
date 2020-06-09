import { throws } from "assert";


const ColorValues = {
   'black': 0,
   'brown': 1,
   'red': 2,
   'orange': 3,
   'yellow': 4,
   'green': 5,
   'blue': 6,
   'violet': 7,
   'grey': 8,
   'white':9
}

type Color = keyof typeof ColorValues 

export class ResistorColor {

  private colors: Color[];

  constructor(colors: [Color, Color]) {
    this.colors = colors
  }

  value = (): number => {    
    const [firstColor, secondColor] = this.colors
    
    let result = ColorValues[firstColor] * 10
    result += ColorValues[secondColor]
    
    return result  
  }
}
