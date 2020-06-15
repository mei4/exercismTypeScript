
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
    let dna: DNA
    for (dna in DNAtoRNA) {
      nucleotides = nucleotides.replace(new RegExp(dna, 'g'), DNAtoRNA[dna].toLowerCase())
    }
    return nucleotides.toUpperCase()
  }
}

export default Transcriptor