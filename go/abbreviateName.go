package kata

import "strings"

func AbbrevName(name string) string {
	secondInitialIndex := strings.Index(name, " ")
	return strings.ToUpper(name[0:1]) + "." + strings.ToUpper(name[secondInitialIndex+1:secondInitialIndex+2])
}
