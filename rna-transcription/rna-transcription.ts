import { off } from "process"

const DNAtoRNA: Record<DNA,RNA> = {
  'A': 'U',
  'C': 'G',
  'G': 'C',
  'T': 'A'
} as const


type DNA = 'A' | 'C' | 'G' | 'T'

type RNA = 'U' | 'G' | 'C' | 'A'


class Transcriptor {

  toRna(nucleotides: string): string {
    if (nucleotides.match(new RegExp('[^A|G|T|C]'))) throw new Error('Invalid input DNA.')
    
    return nucleotides.replace(/A|G|T|C/g, (match) => { return DNAtoRNA[match as DNA] })
  }
}

export default Transcriptor