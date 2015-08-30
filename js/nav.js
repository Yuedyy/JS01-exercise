window.onload=function()
{
	var oPart=document.getElementById('part');
	var aNav=document.getElementById('nav');
	var aUl_nav1=aNav.getElementsByTagName('nav-1')[0];
	var aTxt_nav1=aNav.getElementsByTagName('nav-text');

	var aUl_nav2=aNav.getElementsByTagName('nav-2')[0];
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