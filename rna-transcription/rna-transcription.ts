import { off } from "process"

const DNAtoRNA = {
  'A': 'U',
  'C': 'G',
  'G': 'C',
  'T': 'A'
} as const

type DNA = keyof typeof DNAtoRNA

type RNA = typeof DNAtoRNA[DNA]


class Transcriptor {

  toRna(nucleotides: string): string {
    if (nucleotides.match(new RegExp('[^A|G|T|C]'))) throw new Error('Invalid input DNA.')
    
    const replacer = (match: string): RNA => { return DNAtoRNA[match as DNA] }
    
    return nucleotides.replace(/A|G|T|C/g, replacer)
  }
}

export default Transcriptor