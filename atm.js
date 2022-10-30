var balance=20000;
localStorage.setItem("storageName",balance);
function submit()
{
    
    var accountnumber = document.getElementById("accountnumber").value;
    var pin = document.getElementById("PIN").value;
    
if(accountnumber=="12345" && pin=="1234"  ){
window.location.href="withdraw.html";

}

else{

    alert("invalid details");
}
}


function confirm(){

    var amt = document.getElementById("amt").value;
    if(amt%100==0){
    localStorage.setItem("storageName1",amt);
    window.location.href="withdraw2.html"
    }
    else{

        alert("PLEASE ENTER MULTIPLE OF 100")
    }

}

 
function show(){
    var balance = localStorage.getItem("storageName",balance);
   
   var amount = localStorage.getItem("storageName1",amt);
   
   var amt=amount;
   if(balance>=amount){
    
  document.getElementById("2thousand").value=parseInt(amt/2000);
  amt=amt%2000;

  document.getElementById("thousand").value=parseInt(amt/500);
  amt=amt%500;
  document.getElementById("hundred").value=parseInt(amt/100);


balance=balance-amount;
localStorage.setItem("storageName",balance);
alert(balance);

}

if(balance<amount){
    alert("NOT ENOUGHT ALANCE");
}
   
}



