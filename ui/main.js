console.log('Loaded!');

var element=document.getElementById('maintxt');

element.innerHTML='no Value..';

var img=document.getElementById('madi');

right=0;
function moveright(){
     right+=10;
     img.style.marginleft=right+'px';
    
} 

img.onclick=function(){
    var interval=setInterval(moveright,50);
    
}