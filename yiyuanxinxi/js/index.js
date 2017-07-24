// JavaScript Document
window.onload=function(){
	var leftList=document.getElementById("left_list"),
		leftLi=document.querySelectorAll("#left_list>li"),
		keshiList=document.getElementById("keshi_list"),
		keshiLi=keshiList.getElementsByTagName("li"),
		baobiaoList=document.getElementById("baobiao_list"),
		baobiaoLi=baobiaoList.getElementsByTagName("li"),
		xinxiList=document.getElementById("xinxi_list"),
		xinxiLi=xinxiList.getElementsByTagName("li");

	for(var i=0;i<leftLi.length;i++){
		
		leftLi[i].onmouseover=function(){						
			this.childNodes[0].classList.add("color_wb");
			if(this.classList.contains("sec")){	
				var thisUl=this.getElementsByTagName("ul")[0];
				thisUl.classList.remove("hide");
				var thisLi=thisUl.getElementsByTagName("li");
				for(var j=0;j<thisLi.length;j++){
					thisLi[j].onmouseover=function(){
						this.style.background="RGB(119,169,254)";
					}
					thisLi[j].onmouseout=function(){
						this.style.background="#FFF";
					}
				}
			}
		}
		leftLi[i].onmouseout=function(){
			this.childNodes[0].classList.remove("color_wb");
			if(this.classList.contains("sec")){	
				this.getElementsByTagName("ul")[0].classList.add("hide");
			}	
		}
	}
}