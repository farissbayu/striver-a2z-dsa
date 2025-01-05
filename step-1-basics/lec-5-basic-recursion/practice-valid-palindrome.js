// Leetcode
function isPalindrome(s) {
  const str = s.replace(/[^a-zA-Z0-9]/g, "");
  const lowStr = str.toLowerCase();
  return checkP(0, lowStr);
}

function checkP(i, s) {
  if (i >= s.length / 2) return true; // string is palindrome
  if (s[i] != s[s.length - i - 1]) return false; // string is not palindrome
  return checkP(i + 1, s);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
