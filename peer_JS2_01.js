	var value = 42;

	if (value >= 53) {
		value += 42;
	} else {
		value -= 13;
	}
   value += "11";

   var array = [];
   for (var i = 0; i < value.length; i++) {
   		array.push(value.charAt(i));
   }
   console.log(array);
   array.shift();
   console.log(array);
   array.pop();
   console.log(array);
   
   var newNum = "";
   for (var i = (array.length - 1); i >= 0; i--) {
   	newNum = newNum + array[i];
   }

   value = parseInt(value);
   newNum = parseInt(newNum);
   console.log(value);
   console.log(newNum);

   value = value + newNum;

   if(value<60){
   	value = 14;
   }else if (value =2930){
   	value = 27;
   } else {
   	value = 2;
   	}
   	var i= 10;
   	while(i>0){
   		value++;
   		i--;
	}
   

var stringMe = function(val){
  val = val.toString();
  if(val.length >1 ){
    val = val.slice(1);
    return value = val;
  }
};

stringMe(value);

console.log(value);