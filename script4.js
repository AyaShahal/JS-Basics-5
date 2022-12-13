function show(){    
     var a=document.getElementById("Number").value;    
      var s=0;     for (var i= 2; i<=a; i++) {         if(i%2!=0){             s+=i;          }     }     alert(s); }