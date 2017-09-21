$('#f1-calculate').on('click', function (e) {
  e.preventDefault()

  $('#f1-result').val(divition($('#f1-a').val(), $('#f1-b').val()))
})

$('#f2-calculate').on('click', function (e) {
  e.preventDefault()

  $('#f2-result').val(arrayAddition($('#f2-a').val(), $('#f2-b').val()))
})

function divition (num1, num2) {
	let integer = 0
	let decimal1 = 0
	let decimal2 = 0
	let result = ''
	const surplus1 = num1 % num2

	if((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)){
		makingDivision ()

		result = integer + ',' + decimal1 + decimal2

		return result
	}else if(num1 < 0 || num2 < 0){
		makingDivision()

		result = '-' + integer + ',' + decimal1 + decimal2

		return result
	}else if(num1 == 0){
		result = '0'

		return result
	}else if(num2 == 0){
		result = 'Infinity'

		return result
	}else{return 'It appears there has being a mistake, an error....'}

	function makingDivision () {
		num1 = Math.abs(num1)
		num2 = Math.abs(num2)

		for (var i = num1; i >= num2; i -= num2){
			integer++
		}

		if (surplus1) {
			let getDecimal1 = surplus1 * 10
			const surplus2 = getDecimal1 % num2

			for (var i = getDecimal1 ; i >=  num2; i -= num2) {
				decimal1++
			}
			if (surplus2) {
				let getDecimal2 = surplus2 * 10

				for (var i = getDecimal2 ; i >= num2; i -= num2) {
					decimal2++
				}
			}
		}
	}
}

function arrayAddition (position1, position2) {
	const initialArray = [12,-20,15,-78,10,145,78,-65,0,-13,-95,45,14,1,84,-6,-74]
	let result = initialArray[position1]

	if(position2){
		result = 0
		if(position1 < position2){
			for (var i = position1; i <= position2; i++) {
				if(initialArray[i]>0){
					result += initialArray[i]
				}
			}
		}else if(position1 > position2){
			result = 0
			for (var i = position2; i <= position1; i++) {
				if(initialArray[i]>0){
					result += initialArray[i]
				}
			}
		}
	}

	return result
}

