
//获取非行间css样式
function getStyle(obj,attr){    //获取非行间样式，obj是对象，attr是值
    if(obj.currentStyle){   //针对ie获取非行间样式
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];   //针对非ie
    };
};
//为对象写入/获取css样式
function css(obj,attr,value){   //对象，样式，值。传2个参数的时候为获取样式，3个是设置样式
    if(arguments.length == 2){  //arguments参数数组，当参数数组长度为2时表示获取css样式
        return getStyle(obj,attr);  //返回对象的非行间样式用上面的getStyle函数
    }else{
        if(arguments.length == 3){  //当传三个参数的时候为设置对象的某个值
            obj.style[attr] = value;
        };
    };
};


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
				css(aTxt_nav1[i],'display','none');
				
			}
			this.className="active";
			//getStyle(aTxt_nav1[this.index],'display')='block';
			css(aTxt_nav1[this.index],'display','block');
			
		}
		aBtn_nav2[i].onmousemove=function()
		{
			for(var i=0; i<aBtn_nav2.length; i++)
			{
				aBtn_nav2[i].className=' ';
			}
			css(aTxt_nav1[this.index],'display','none');
		}
	}
}