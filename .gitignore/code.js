process.argv[2];
let location = process.argv[2];

console.log("oi")
readFormula(location);

function readFormula(location) {
  // To read the file, it is possible to use the 'fs' module. 
  // Use function readFileSync and not readFile. 
  // First read the lines of text of the file and only afterward use the auxiliary functions.
  let start = require('fs');
  let text = start.readFileSync(location, 'utf8').toString();
  let character = 'v';
  let qV = readQuantity(text, character);
  character = 'c';
  let qC = readQuantity(text, character);
  console.log(text);
  }

//cnt is for counters
//str is for strings
//val is for values

  function readQuantity(text, character){
	if (character == 'v'){
		if(text[cnt].includes("cnf ")){
			if (text[cnt].startsWith("p")){
				let str = text[cnt].toString();
				let val = str.indexOf("cnf ");
				let val2 = 0;
				var str2 = "";
				while (str.charAt[val2+val] != " "){
					let str3 = str2;
					str2 = str3.toString() + str.charAt[val2+val].toString();
				val2++;
				}
				return str2;
			}
		}
	} else if (character == 'c'){
		if(text[cnt].includes("cnf ")){
			let str = text[cnt].toString();
			let val = str.length;
			let str2 = "";
			while(str.charAt(val - 1) != " "){
				let str3 = str2;
				str2 = str.charAt[val -1].toString() + str3.toString();
				val--;
			}
			return str2;
		}
	}
