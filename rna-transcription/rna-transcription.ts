
const NucleotidesComplements = {
    'A': 'U',
    'C': 'G',
    'G': 'C',
    'T': 'A'
}

type Nucleotide = keyof typeof NucleotidesComplements

class Transcriptor {

    toRna(nucleotides: string) {
      const result = [...nucleotides].reduce((acc, val) => acc += this.transcribe(val), '')
      return result
    }

    private transcribe = (value: string): string => {
      if (value !== 'A' && value !== 'C' && value !== 'G' && value !== 'T') throw new Error('Invalid input DNA.')
      return NucleotidesComplements[value]
    }
}

export default Transcriptor