window.onload=function()
{
	var oCont=document.getElementById('container');
	var oPart=oCont.getElementById('part');
	var aNav=oPart.getElementById('nav');
	var aUl_nav1=aNav.getElementsByName('nav-1')[0];
	var aTxt_nav1=aNav.getElementsByName('nav-text');

	var aUl_nav2=aUl_nav1.getElementsByName('nav-2')[0];
	var aBtn_nav2=aUl_nav2.getElementsByTagName('li');
	
	for(var i=0; i<aBtn_nav2.length; i++)
	{
		aBtn_nav2[i].index=i;
		aBtn_nav2[i].onmouseover=function()
		{
			for(var i=0; i<aBtn_nav2.length; i++)
			{
				aBtn_nav2[i].className=' ';
				aTxt_nav1[i].style.display='none'
			}
			this.className="active";
			aTxt_nav1[this.index].style.display="block";
			
		}
		aBtn_nav2[i].onmousemove=function()
		{
			for(var i=0; i<aBtn_nav2.length; i++)
			{
				aBtn_nav2[i].className=' ';
			}
			aTxt_nav1[this.index].style.display="none";
		}
	}
}