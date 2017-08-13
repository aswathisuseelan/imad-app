var button=getElementById('counter');
var counter=0;
button.onClick = function () 
{
    counter=counter+1;
    var span=document.getElementById('count');
    spanner.InnerHTML=counter.toString();
}
console.log('loaded');
var marginLeft=0;
var img=document.getElementById('madi');
img.onclick=function(){
    var interval=setInterval(moveRight,100);
    img.style.marginLeft=100px;
    
};
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft+margiLeft+'px';
}

