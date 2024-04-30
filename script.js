function firstNonRepeatedChar(str) {
  const charFrequency = new Map();

  // Populate the character frequency map
  for (let char of str) {
    charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
  }

  // Find the first non-repeated character
  for (let char of str) {
    if (charFrequency.get(char) === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
