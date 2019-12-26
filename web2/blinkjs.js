
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
var viewlist = document.getElementsByClassName("quickview");
var view = document.getElementById("view");
var poplist = document.getElementsByClassName("pop");
var k=1;
var h=0;
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

var flag=true;
var iglist;
var k;
for(var j=0;j<6;j++){
	viewlist[j].index = j;
	viewlist[j].onclick = function(){
		
		var st0 = document.createElement("img");
		st0.src="image4/star0.png";
		st0.title="1";
		view.appendChild(st0);
		var st1 = document.createElement("img");
		st1.src="image4/star0.png";
		st1.title="2";
		view.appendChild(st1);
		var st2 = document.createElement("img");
		st2.src="image4/star0.png";
		st2.title="3";
		view.appendChild(st2);
		var st3 = document.createElement("img");
		st3.src="image4/star0.png";
		st3.title="4";
		view.appendChild(st3);
		var st4 = document.createElement("img");
		st4.src="image4/star0.png";
		st4.title="5";
		view.appendChild(st4);
		var aimg = document.createElement("img");
		h=this.index+1;
		aimg.src="image4/pop.PNG";
		aimg.style.width="500px";
		aimg.style.height="400px";
		view.appendChild(aimg);
		iglist = view.getElementsByTagName("img");
		for(var p=0;p<iglist.length;p++){
	        iglist[p].onmouseover = function(){
	            if(flag){
	                var index = this.getAttribute("title");
	                if(index>2){
	                    imgsrc ="image4/star2.png";
	                }else{
	                    imgsrc ="image4/star1.png";
	                }
	                for(var w=0;w<index;w++){
	                
	                    iglist[w].src = imgsrc;
	                }
	            }else{
	                return;
	            }
	        }
	        iglist[p].onmouseout = function(){
	            if(flag){
	                var index = this.getAttribute("title");
	                for(var d=0;d<index;d++){
	                iglist[d].src = "image4/star0.png";

	                }
	                
	            }else{
	                return;
	            }
	        }


	        iglist[p].onclick =function(){
	            flag = !flag;
	            k=this.title;
	            if(k>3){
    				var str =poplist[h-1].innerHTML;
    				var str1 = str.slice(0,3);
    				var str2 = str.slice(3);
    				var t = Number(str2);
    				t++;
    				poplist[h-1].innerHTML = str1+t;

    			}
	            
	        }
	    }
	    poplist[this.index].onclick=function(){
    	view.removeChild(aimg);
    	view.removeChild(st0);
    	view.removeChild(st1);
    	view.removeChild(st2);
    	view.removeChild(st3);
    	view.removeChild(st4);
    }
       
 }

    
    
    


}
	
















