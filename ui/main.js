var button=getElementById('counter');
counter=0;
button.onClick=function(){
    counter=counter+1;
    var span=document.getElementNById('count');
    spanner.InnerHTML=counter.getString();
}
