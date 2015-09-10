//选择非行间css样式
function getStyle(obj,name){
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else{
		return getComputedStyle(obj,false)[name];
	}
}


window.onload=function()
{
	var aNav=document.getElementById('nav');
	var aUl_nav1=aNav.getElementsByClassName('nav-1')[0];
	var aTxt_nav1=aNav.getElementsByClassName('nav-text');

	var aUl_nav2=aUl_nav1.getElementsByClassName('nav-2')[0];
	var aBtn_nav2=aUl_nav2.getElementsByTagName('li');
	

	for(var i=0; i<aBtn_nav2.length; i++)
	{
		aBtn_nav2[i].index=i;
		aBtn_nav2[i].onmouseover=function()
		{
			
			for(var i=0; i<aBtn_nav2.length; i++)
			{
				aBtn_nav2[i].className=' ';
				getStyle(aTxt_nav1[i],z-index)=1;
				
			}
			this.className="active";
			getStyle(aTxt_nav1[this.index],z-index)=4000;
			
			
		}
		aBtn_nav2[i].onmousemove=function()
		{
			for(var i=0; i<aBtn_nav2.length; i++)
			{
				aBtn_nav2[i].className=' ';
			}
			getStyle(aTxt_nav1[this.index],z-index)=1;
		}
	}
}