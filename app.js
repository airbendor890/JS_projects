//sett initial value

let count=0;


//select value and button

//const value=document.querySelector('#value')
const btns = document.querySelectorAll(".btn");
function counterColor(){
	if (count>0){
		document.getElementById("value").style.color = "green";
	}
	if (count<0){
		document.getElementById("value").style.color = "red";
	}
	if (count==0){
		document.getElementById("value").style.color = "black";
	}	
}


btns[0].addEventListener("click", 
	function () {
	count--;
	document.getElementById("value").innerHTML = count;
	counterColor();
});

btns[1].addEventListener("click", 
	function () {
	count=0;
	document.getElementById("value").innerHTML = count;
	counterColor();
});

btns[2].addEventListener("click", 
	function () {
	count++;
	document.getElementById("value").innerHTML = count;
	counterColor();
});