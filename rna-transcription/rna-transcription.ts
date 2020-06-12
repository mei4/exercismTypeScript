
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
      if (nucleotides.length == 0) return ''
      else return this.transcribe(nucleotides.charAt(0)) + this.toRna(nucleotides.substr(1))
    }

    private transcribe = (value: string): RNA => {
      if (!['A', 'C', 'G', 'T'].includes(value)) throw new Error('Invalid input DNA.')
      return DNAtoRNA[value as DNA]
    }
}

export default Transcriptor