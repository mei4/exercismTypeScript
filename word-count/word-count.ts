const TAB = '\\t'
const MULTILINE = '\\n'
const SPACES = '\\s+'

class Words {

	count(sentence: string) {
		
		const occurrences = new Map<string, number>()
		
		for (const word of this.getWords(sentence)) {
			const occurrencesCount = occurrences.get(word)
			occurrences.set(word, (occurrencesCount ?? 0) + 1)
		}
		
		return occurrences
	}

	private getWords(sentence: string): string[] {
		const splitCriteria = `${TAB}|${MULTILINE}|${SPACES}`
		
		return sentence.toLowerCase().trim().split(new RegExp(splitCriteria))
	}
}

export default Words