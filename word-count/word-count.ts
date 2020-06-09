const TAB = '\\t'
const MULTILINE = '\\n'
const SPACES = '\\s+'

class Words {

	count(sentence: string) {
		
		const words = this.splitSentence(sentence.toLowerCase())
		const occurrences = new Map<string, number>()
		
		for (const word of words) {
			const occurrencesCount = occurrences.get(word)
			occurrences.set(word, (occurrencesCount ?? 0) + 1)
		}
		
		return occurrences
	}

	private splitSentence(sentence: string): string[] {
		const splitCriteria = `${TAB}|${MULTILINE}|${SPACES}`
		
		return sentence.trim().split(new RegExp(splitCriteria))
	}
}

export default Words