export function stringToCaseInsensitiveRegExp(input: string) {
  let result = ""
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let uppercaseChar = char.toUpperCase()
    let lowercaseChar = char.toLowerCase()
    
    if (uppercaseChar !== lowercaseChar) {
      result += "[" + uppercaseChar + lowercaseChar + "]"
    } else {
      result += char
    }
  }
  return result
}

export const UPPERCASE_REGEXP = /[A-ZА-Я]/