package main

import "fmt"

func check(nums []int) bool {
	breakPoint := 0
	for i := 0; i < len(nums); i++ {
		if i == len(nums)-1 {
			if nums[i] > nums[0] {
				breakPoint++
			}

		} else if nums[i] > nums[i+1] {
			breakPoint++
		}
	}

	if breakPoint > 1 {
		return false
	} else {
		return true
	}
}

func main() {
	fmt.Println(check([]int{3, 4, 5, 1, 2}))
	fmt.Println(check([]int{2, 1, 3, 4}))
	fmt.Println(check([]int{1, 2, 3}))
}
