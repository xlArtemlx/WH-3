var str = ""
for(i = 0; i < 15 ; i++){
 if(i % 2 === 0) {
   str += " "
 } else if (i % 2 !==0 ) {
  str += "#"
 }
}
console.log(str)