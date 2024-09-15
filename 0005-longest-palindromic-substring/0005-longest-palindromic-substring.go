package main

import "fmt"

func longestPalindrome(s string) string {
	n := len(s)
	if n < 2 {
		return s
	}

	start, maxLength := 0, 1

	for i := 0; i < n-1; i++ {
		for j := i + 1; j < n; j++ {
			if isPalindrome(s, i, j) && j-i+1 > maxLength {
				start = i
				maxLength = j - i + 1
			}
		}
	}

	return s[start : start+maxLength]
}

func isPalindrome(s string, left, right int) bool {
	for left < right {
		if s[left] != s[right] {
			return false
		}
		left++
		right--
	}
	return true
}