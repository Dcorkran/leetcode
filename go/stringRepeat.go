package kata

func RepeatStr(repetitions int, value string) string {
	var returnString string = value
	for index := 1; index < repetitions; index++ {
		returnString += value
	}
	return returnString
}
