var button=getElementById('counter');
var counter=0;
button.onClick=function(){
    counter=counter+1;
    var span=document.getElementById('counter');
    spanner.InnerHTML=counter.toString();
}
