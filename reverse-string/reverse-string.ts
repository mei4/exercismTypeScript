import { workers } from "cluster"

class ReverseString {
    static reverse(word: string): string {
        return word == '' ? '' : this.reverse(word.substr(1)) + word.charAt(0)
    }
}

export default ReverseString
