/*Иногда можно встретить просто нереальные вещи, построенные только при помощи кода. Но мы с вами займемся базовой фигурой. Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

     *
    ***
   *****
  *******
 *********
************/

const lines = 5;
let result = '';

for (let i = 0; i<= lines; i++){
	for( let k = 5; i<k; k--){
		result += " ";
	};
	for (let j = -1; j < i; j++){
		result += "*";
	};
	for (let j = 0; j < i; j++){
		result += "*";
	};
	result += '\n';
}

console.log(result);
