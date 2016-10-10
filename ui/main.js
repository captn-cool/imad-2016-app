console.log('Loaded!');

var element=document.getElementById('maintxt');

element.innerHTML='no Value..';

var img=document.getElementById('madi');

var marginLeft=0;
function moveright(){
     marginLeft=marginLeft+10;
     img.style.marginLeft=marginLeft+'px';
    
} 

img.onclick=function(){
    var interval=setInterval(moveright,50);
    
};