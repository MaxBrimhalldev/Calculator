// get value of button
let total = 0
let num1 = ''
let num2 = ''
let display = ''
let operator = ''

document.querySelector('.calcKeys').addEventListener('click', displayCalc)
document.querySelector('#one').addEventListener('click', won)
document.querySelector('#one').addEventListener('click', two)
document.querySelector('#plus').addEventListener('click', plus)


function won(){
	if(operator === ''){
		num1 += '1'
	}else{
		num2 += '1'
	}
}
function plus (){
	if(operator === '+'){
		operator = '+'
		num1 + num2
	}
	
}

function displayCalc(){
	display = num1 + operator + num2
	
document.querySelector('#calcDisplay').innerText = display
}