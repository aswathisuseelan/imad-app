var button=getElementById('counter');
var counter=0;
button.onClick = function () 
{
    counter = counter + 1;
    var span=document.getElementById('count');
    spanner.InnerHTML=counter.toString();
};

var marginLeft=0;
var img=document.getElementById('madi');

function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft+margiLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
    img.style.marginLeft=100;
    
};


