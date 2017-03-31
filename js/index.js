;(function () {

  fnSearch();
  fnBanner();
  fnDownTime();

  // 搜索栏特效
  function fnSearch()
  {
    var oHeaderBox=document.querySelector(".header_box");
    var oBanner=document.querySelector(".jd_banner");
    var nHeight=oBanner.offsetHeight;//获取轮播图高度

    window.onscroll=function ()
    {
      var nScrollTop=document.body.scrollTop;//获取滚动条滚动距离
      var nOpacity=0;//搜索栏透明度

      if(nScrollTop>nHeight)
      {

        nOpacity=0.85;

      }
      else
      {

        nOpacity=0.85*(nScrollTop/nHeight);

      };

      oHeaderBox.style.background="rgba(201,21,35,"+nOpacity+")";//改变搜索栏透明度

    };
  };

  // 轮播图滚动

  function fnBanner() {
    var oBannerBox=document.querySelector(".jd_banner");
    var nWidth=oBannerBox.offsetWidth;
    var oImageBox=oBannerBox.querySelector("ul:first-child");
    var oPointBox=oBannerBox.querySelector("ul:last-child");
    var aPoins=oPointBox.querySelectorAll("li");
    var index=1;

    // 设置过渡属性
    var addTransition=function (object)
    {
      object.style.webkitTransition="all .6s";
      object.style.transition="all .6s";
    };

    // 移除过度属性
    var removeTransition=function (object)
    {

      object.style.webkitTransition="";
      object.style.transition="";

    }

    // 设置translate
    var setTranslate=function (object,value)
    {

      object.style.webkitTransform="translateX("+value+"px)";
      object.style.transform="translateX("+value+"px)";

    }

    //自动滚动
    var timer=setInterval(function ()
    {

      index++;
      //设置过度属性
      addTransition(oImageBox);
      //移动图片
      setTranslate(oImageBox,-index*nWidth);

    },3000);

    //无缝滚动
    common.transitionEnd(oImageBox,function () {

      if(index>=9)
      {
        index=1;
        //清除过渡
        removeTransition(oImageBox);
        //瞬间定位
        setTranslate(oImageBox,-index*nWidth);
      }

      else if(index<=0)
      {

        index=8;
        //清除过渡
        removeTransition(oImageBox);
        //瞬间定位
        setTranslate(oImageBox,-index*nWidth);

      };

      setPoint(index);

    });
    //小圆点
    var setPoint=function (index) {

      for(var i=0;i<aPoins.length;i++)
      {

        aPoins[i].className="";

      };

      aPoins[index-1].className="now";

    };
    //拖拽效果
    var startX=0;
    var moveX=0;
    var distanceX=0;
    var isMove=false;

    //触摸事件
    oImageBox.addEventListener("touchstart",function (e) {

        clearInterval(timer);
        startX=e.touches[0].clientX;

    });

    //触摸滑动事件
    oImageBox.addEventListener("touchmove",function (e) {

        moveX=e.touches[0].clientX;
        isMove=true;
        distanceX=moveX-startX;
        removeTransition(oImageBox)
        setTranslate(oImageBox,-index*nWidth+distanceX);

    });

    //触摸结束
    oImageBox.addEventListener("touchend",function (e) {

      //吸附和滑动效果
        if(Math.abs(distanceX)>(nWidth/3)&&isMove)
        {

          if(distanceX>0)
          {
            index--;
          }
          else
          {
            index++;
          };

          addTransition(oImageBox);
          setTranslate(oImageBox,-index*nWidth);

        }
        else {

          addTransition(oImageBox);
          setTranslate(oImageBox,-index*nWidth);

        };
        //重启定时器
        timer=setInterval(function ()
        {

          index++;
          //设置过度属性
          addTransition(oImageBox);
          //移动图片
          setTranslate(oImageBox,-index*nWidth);

        },3000);

        //重置
        startX=0;
        moveX=0;
        distanceX=0;
        isMove=false;
    });
  };

  //倒计时效果
  function fnDownTime() {

    var oSktime=document.querySelector(".sk_time");
    var aSpan=oSktime.querySelectorAll("span");
    var time=3*60*60;//获取倒计时时间

    var downtime=setInterval(function ()
    {

      time--;
      if(time<0)
      {

        clearInterval(downtime);

      };

      var h=Math.floor(time/3600);
      var m=Math.floor((time/3600)%60);
      var s=time%60;

      aSpan[0].innerHTML=Math.floor(m/10);
      aSpan[1].innerHTML=h%10;
      aSpan[3].innerHTML=Math.floor(m/10);
      aSpan[4].innerHTML=h%10;
      aSpan[6].innerHTML=Math.floor(s/10);
      aSpan[7].innerHTML=s%10;

    },1000);

  };

})();

