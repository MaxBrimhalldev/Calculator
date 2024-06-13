// get value of button
let total = 0
let num1 = ''
let num2 = ''
let display = ''
let operator = ''

document.querySelector('.calcKeys').addEventListener('click', displayCalc)

document.querySelector('#one').addEventListener('click', won)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)
document.querySelector('#sero').addEventListener('click', zero)


document.querySelector('#calculate').addEventListener('click', equals)
document.querySelector('#plus').addEventListener('click', plus)
document.querySelector('#minus').addEventListener('click', subtract)
document.querySelector('#divide').addEventListener('click', divide)
document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#clear').addEventListener('click', clearing)
document.querySelector('#punc').addEventListener('click', punctuation)


function won(){
	if(operator === ''){
		num1 += '1'
	}else{
		num2 += '1'
	}
}

function two(){
	if(operator === ''){
		num1 += '2'
	}else{
		num2 += '2'
	}
}

function three(){
	if(operator === ''){
		num1 += '3'
	}else{
		num2 += '3'
	}
}

function four(){
	if(operator === ''){
		num1 += '4'
	}else{
		num2 += '4'
	}
}

function five(){
	if(operator === ''){
		num1 += '5'
	}else{
		num2 += '5'
	}
}

function six(){
	if(operator === ''){
		num1 += '6'
	}else{
		num2 += '6'
	}
}

function seven(){
	if(operator === ''){
		num1 += '7'
	}else{
		num2 += '7'
	}
}

function eight(){
	if(operator === ''){
		num1 += '8'
	}else{
		num2 += '8'
	}
}

function nine(){
	if(operator === ''){
		num1 += '9'
	}else{
		num2 += '9'
	}
}

function zero(){
	if(operator === ''){
		num1 += '0'
	}else{
		num2 += '0'
	}
}
function plus (){
	operator = '+'
}

function subtract (){
	operator = '-'
}

function divide (){
	operator = '/'
}

function multiply (){
	operator = '*'
}

function equals(){
	num1 = (+num1)
	num2 = (+num2)
	if(operator === '+'){
		total = num1 + num2
	}else if(operator === '/'){
		total = num1 / num2
	}else if(operator === '*'){
		total = num1 * num2
	}else if(operator === '-'){
		total = num1 - num2
	}
	document.querySelector('#calcResult').innerText = total
}

function displayCalc(){
	display = num1 + operator + num2
	
document.querySelector('#calcDisplay').innerText = display

}
function clearing(){
	total = 0
	num1 = ''
	num2 = ''
	operator = ''
	document.querySelector('#calcResult').innerText = '0'
	document.querySelector('#calcDisplay').innerText = '0'
}