document.addEventListener("DOMContentLoaded",function(){
   var reader = document.getElementById("NLU");
   if(reader){
    reader.addEventListener("click", ShowOff);
   }
   var mostafa = document.getElementById("Froozen");
   if(mostafa){
    mostafa.addEventListener("click", ShowOff2);
   }
});

function ShowOff() {
    var Msgs = document.getElementById("Msgs");
    Msgs.innerHTML = "0";
    var unread_boxes1 = document.getElementById("unread_boxes1");
    unread_boxes1.style.backgroundColor = "White";
    var unread_boxes2 = document.getElementById("unread_boxes2");
    unread_boxes2.style.backgroundColor = "White";
    var unread_boxes3 = document.getElementById("unread_boxes3");
    unread_boxes3.style.backgroundColor = "White";
    var uRedDot1 = document.getElementById("RedDot1");
    uRedDot1.style.display = "none";
    var uRedDot2 = document.getElementById("RedDot2");
    uRedDot2.style.display = "none";
    var uRedDot3 = document.getElementById("RedDot3");
    uRedDot3.style.display = "none";
}


function ShowOff2() {

        var mina = document.getElementById("Humble");
        mina.style.backgroundColor = "var(--Very-light-grayish-blue)";
        setTimeout(function(){
            mina.style.backgroundColor = "White";
        },1000);
    
}