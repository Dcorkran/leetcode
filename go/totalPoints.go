package kata

import "strconv"

func Points(games []string) int {
	final := 0
	for _, game := range games {
		score1, _ := strconv.Atoi(string(game[0]))
		score2, _ := strconv.Atoi(string(game[2]))
		result := score1 - score2
		switch {
		case result > 0:
			final += 3
		case result == 0:
			final += 1
		default:
		}
	}
	return final
}
