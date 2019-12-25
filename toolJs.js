var btn = document.getElementsByClassName("btn");
var quickview = document.getElementsByClassName("quickview");
var count = document.getElementById("count");
var num=0;
var copyright = document.getElementById("copyright");
var views =document.getElementsByClassName("quickview");
var search = document.getElementById("search");
var type1 =document.getElementById("type1");
var type2 = document.getElementById("type2");
var t=0;	

for(var i=0;i<btn.length;i++){
	btn[i].onclick=function(){
		var aname=this.getAttribute("name");
		shopcar.style.display="block";
		num++;
		count.setAttribute("value",num);
		this.setAttribute("value","added!");
		setTimeout(function(){
			for(j=0;j<btn.length;j++){
				btn[j].setAttribute("value","add to bag");					
			}

		},1200)

		var liNode=document.createElement("li");
		var liCount=list.children.length+1;	
		liNode.innerHTML=liCount+"."+aname;
		list.appendChild(liNode);

	}

	btn[i].onmouseover=function(){
		this.style.backgroundColor="#000";
		this.style.color="#fff";
	}
	btn[i].onmouseout=function(){
		this.style.backgroundColor="#fff";
		this.style.color="#000";
	}
	quickview[i].onmouseover=function(){
		this.style.borderColor="#ccc";
		this.style.color="#aaa";
	}
	quickview[i].onmouseout=function(){
		this.style.borderColor="#000";
		this.style.color="#000";
	}
}	
for(var i=0;i<quickview.length;i++){
    //quickview
 	views[i].onclick=function(){
 		var t=this.getAttribute("value");
		var openUrl ="E:\\D2\\web2\\views\\view"+t+".html";//弹出窗口的url
		var name="quickview";//窗口名称
		var iWidth=800; //弹出窗口的宽度;
		var iHeight=250; //弹出窗口的高度;
		var iTop = (window.screen.availHeight-30-iHeight)/2; //获得窗口的垂直位置;
		var iLeft = (window.screen.availWidth-10-iWidth)/2; //获得窗口的水平位置;
		window.open(openUrl,name,"height="+iHeight+", width="+iWidth+", top="+iTop+", left="+iLeft);
	}

}
copyright.children[0].style.fontSize="25px";
copyright.children[1].style.fontSize="15px";

//弹出框
window.onload = function () {
    timer = window.setInterval(imgBlock, 2000);
};
function imgBlock() {
    var pop = document.getElementById('pop');
    pop.style.display = 'block';
    timer2 = window.setInterval(imgNone,5000);
}
function imgNone() {
    var pop = document.getElementById('pop');
    pop.className = 'down';
    clearInterval(timer);
    clearInterval(timer2);
}



search.onclick=function(){
	t++;
	if(t%2==1){
		type1.style.display="block";
		type2.style.display="block";
	}
	else{
		type1.style.display="none";
		type2.style.display="none";    		
	}

}

Delete.onclick=function(){
	if(list.hasChildNodes()){
		list.removeChild(list.lastChild);
	}
}
Open.onclick=function(){
	shopcar.style.display="none";
}
car.onclick=function(){
	shopcar.style.display="block";
}