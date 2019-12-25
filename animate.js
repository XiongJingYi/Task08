
var btn = document.getElementsByClassName("btn");
var quickview = document.getElementsByClassName("quickview");
var navtop = document.getElementById("navtop");
var plist =navtop.getElementsByTagName("li");
var li4 = document.getElementById("li4");
var li5 = document.getElementById("li5");
var li6 = document.getElementById("li6");
var li7 = document.getElementById("li7");
var li8 = document.getElementById("li8");
var imgss = document.getElementById("imgss");
var imgslist = imgss.getElementsByTagName("img");
var list=document.getElementById("list");
var Delete =document.getElementById("Delete");
var shopcar = document.getElementById("shopcar");
var open =document.getElementById("open");
var car =document.getElementById("car");
var count=document.getElementById("count");
var num=0;
var banner = document.getElementById("banner");
var imglist = banner.getElementsByTagName("img");

var k=1;
for(var j=4;j<plist.length;j++){
	plist[j].index =j;
	plist[j].onmouseover = function(){
		window.location.hash = "#li"+ this.index;
	}
}

for(var i=0;i<6;i++){
	imgslist[i].index = i;
	imgslist[i].onmouseover = function(){
		k=this.index+1;
		this.src = "image4/a"+k+".jpg";		
	}
	imgslist[i].onmouseout = function(){
		k=this.index+1;
		this.src = "image3/a"+k+".jpg";		
	}
}

for(var i=0;i<btn.length;i++){
		
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
}









