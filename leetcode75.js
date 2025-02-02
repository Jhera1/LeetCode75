

// 1768. Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d

const mergeAlternately = (str1, str2) => {
    let mergedStrings = ''
    let maxLength = Math.max(str1.length, str2.length)
    for (let i = 0; i < maxLength; i++) {
      if (i < str1.length) mergedStrings += str1[i]
      if (i < str2.length) mergedStrings += str2[i]
    }
    return mergedStrings
}
console.log(mergeAlternately('stop', 'rant'))






// 605. Can Place Flowers


// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false


const canPlaceFlowers = (flowerbed, n) => {
    let flowersPLanted = 0   
   for (let i = 0; i < flowerbed.length; i++) {
    if ((i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0))  {
        flowerbed[i] = 1
        flowersPLanted++
        i++
    }
   }
    return flowersPLanted >= n    
}
console.log(canPlaceFlowers([1, 0, 0, 0, 1,], 1))