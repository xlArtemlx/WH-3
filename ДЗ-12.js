for(i = 0;i < 10 ; i++ ) {
    var str = " "
    if(i % 2 === 0) {
        for(j = 0; j < 10 ; j++) {
            if(j % 2 === 0){
                str += "."
            } else { str += "#"
              }
        }
    } else {
        for(x = 0; x < 10 ; x++) {
            if(x % 2 === 0){
                str += "#"
            } else { str += "."
              }
        }
    }
    console.log(str)
}