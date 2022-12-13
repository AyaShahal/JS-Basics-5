var num=0;
document.write("the prime number");
for( let i=2 ;i<=30 ;i++ ){
    text=true;
    for( let j=2 ;j<=i-1 ;j++ ){
        if((i%j==0)){
            text=false;
        }
    }
    if (text){
        document.write( " "+ i + " ")
    }
}