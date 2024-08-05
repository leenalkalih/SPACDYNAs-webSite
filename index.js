console.log( 'llll')
var prod=document.querySelectorAll( '#ser h4' )
console.log(prod)
var v=document.getElementsByClassName('bb')
console.log(v)
var total=0
var btn=document.getElementById('btn')
var btn1=document.getElementById('btn1')
btn1.onclick=function(){
    con.innerHTML=' ';
}
var con=document.getElementById('container')
prod.forEach(function(element){
    element.onclick=function(){
con.innerHTML +=element.textContent+' <br>'
total += +(element.getAttribute('price')) 
    }
    
});
btn.onclick=function(){
   con.innerHTML +=  'Total price' + total 
}

