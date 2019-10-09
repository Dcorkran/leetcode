package kata

import "strings"

func RemoveChar(word string) string {
	stringSlice := strings.Split(word, "")
	substr := strings.Join(stringSlice[1:len(stringSlice)-1], "")
	return substr
}
