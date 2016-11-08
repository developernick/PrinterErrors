// create a function (printerError) that will loop through the string (s)
//
// if the letter is a-m ignore
// if the letter is n-z error
//
// result will be errors/length of string

function printerError(s) {
	var passingLetters = ("abcdefghijklm").split("");// a base array of acceptable letters
	var a = s.length;//this will be the denominator in the final result
	var i = 0;//index number for the while loop to pass throught the string
	var count = 0;//this will be the numerator in the final result

	while (i<a)
	{
		if (passingLetters.indexOf(s[i])===-1) {
			count++;
		}
		i++;
	}
	return (count + "/" + a);
}
