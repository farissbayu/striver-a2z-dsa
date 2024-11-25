package main

import "fmt"

func selectionSort(arr []int) []int {
	for i := 0; i < len(arr)-1; i++ {
		id := i

		for j := i; j < len(arr); j++ {
			if arr[j] > arr[id] {
				id = j
			}
		}

		arr[i], arr[id] = arr[id], arr[i]
	}

	return arr
}

func bubbleSort(arr []int) []int {
	for i := 0; i < len(arr); i++ {
		didSwap := false

		for j := 0; j < len(arr)-i-1; j++ {
			if arr[j] < arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
				didSwap = true
			}
		}

		if !didSwap {
			break
		}
	}

	return arr
}

func insertionSort(arr []int) []int {
	for i := 0; i < len(arr); i++ {
		for j := i; j > 0; j-- {
			if arr[j-1] < arr[j] {
				arr[j-1], arr[j] = arr[j], arr[j-1]
			}
		}
	}

	return arr
}

func main() {
	fmt.Println("- Descending | Sorting Part 1 -")

	fmt.Println("Selection sort | O(N^2)")
	fmt.Println(selectionSort([]int{5, 4, 3, 2, 1, 7}))
	fmt.Println(selectionSort([]int{13, 46, 24, 52, 20, 9}))
	fmt.Println(selectionSort([]int{1, 2, 3, 1, 3, 2, 12}))

	fmt.Println("Bubble sort | O(N^2)")
	fmt.Println(bubbleSort([]int{5, 4, 3, 2, 1, 7}))
	fmt.Println(bubbleSort([]int{13, 46, 24, 52, 20, 9}))
	fmt.Println(bubbleSort([]int{1, 2, 3, 1, 3, 2, 12}))

	fmt.Println("Insertion sort | O(N^2)")
	fmt.Println(insertionSort([]int{5, 4, 3, 2, 1, 7}))
	fmt.Println(insertionSort([]int{13, 46, 24, 52, 20, 9}))
	fmt.Println(insertionSort([]int{1, 2, 3, 1, 3, 2, 12}))
}
