var arr = []

for(var i = 0; i < 10 ; i++ ){
var y = i * i * i
arr.push(y)
}
console.log(arr)


var arr = [] // Тоже самое но через while
var i = 0
while(i < 10){

var y = i * i * i
arr.push(y)
i++
}
console.log(arr)

var arr = [] //Снова тоже самое , но через оператор Math.pow для степеней
var i = 0
while(i < 10){

var y = Math.pow(i,3)
arr.push(y)
i++
}
console.log(arr)