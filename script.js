var isDate = function (input) {
  //   write your code here
	if(input instanceOf Date){
		return true;
	}
	return !isNan(Date.parse(input));
};

// Do not change the code below.
// const input = prompt("Enter Date.");
alert(isDate(input));
