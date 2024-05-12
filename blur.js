<script>
function hi()  {
var pup = document.getElementsByTagName('button')[0];
pup.onclick=function(){
document.getElementById('sh').style.display="block";
document.getElementsByClassName('blur')[0].style.display="block";
};
var close = document.getElementById('close');
close.onclick=function(){
document.getElementById('sh').style.display="none";
document.getElementsByClassName('blur')[0].style.display="none";
};
};



</script>
