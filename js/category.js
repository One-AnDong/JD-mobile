;(function ()
{
  fnLeftSwipe();
  fnRightSwipe();
  // 左边滑动效果
  function fnLeftSwipe()
  {
    var oParentBox=document.querySelector(".jd_category_left");
    var oChildBox=oParentBox.querySelector("ul");
    var nMinY=oParentBox.offsetHeight-oChildBox.offsetHeight;
    var aLi=oChildBox.querySelectorAll("li");
    var nMaxY=0;
    var nMaxSwipeY=100;
    var nMinSwipeY=nMinY-100;


    var addTransitionY=function ()
    {

      oChildBox.style.webkitTransition="all .2s";
      oChildBox.style.transition="all .2s";

    };
    var removeTransitionY=function ()
    {

      oChildBox.style.webkitTransition="none";
      oChildBox.style.transition="none";

    };
    var setTranslateY=function (value)
    {

      oChildBox.style.webkitTransform="translateY("+value+"px)";
      oChildBox.style.transform="translateY("+value+"px)";

    };

    var startY=0;
    var moveY=0;
    var distance=0;
    var isMove=false;
    var curr=0;


    oChildBox.addEventListener("touchstart",function (e)
    {

        startY=e.touches[0].clientY;

    });
    oChildBox.addEventListener("touchmove",function (e)
    {

      isMove=true;
      moveY=e.touches[0].clientY;
      distance=moveY-startY;
      removeTransitionY();

      if((curr+distance)>nMinSwipeY && (curr+distance)<nMaxSwipeY)
      {

        setTranslateY(curr+distance);

      };

    });

    oChildBox.addEventListener("touchend",function (e)
    {

        if((curr+distance)>nMaxY&&isMove)
        {

          addTransitionY();
          setTranslateY(nMaxY);

        }
        else if((curr+distance)<nMinY&&isMove)
        {

          addTransitionY();
          setTranslateY(nMinY)

        }
        else
        {

          curr=distance+curr;

        };
        // 重置参数
        startY=0;
        moveY=0;
        distance=0;
        isMove=false;
    });

    common.tap(oChildBox,function (e)
    {
      console.log(e.target.parentNode);
      var li=e.target.parentNode;
      for(var i=0;i<aLi.length;i++)
      {
        aLi[i].index=i;
        aLi[i].className="";
      };
      li.className="now";
      var translateY=-li.index*50;
      if(translateY>nMinY)
      {
        curr=translateY;
        setTranslateY(curr);
      }
      else
      {
        curr=nMinY;
        setTranslateY(curr);
      };

    });




  };

  // 右边滑动效果
  function fnRightSwipe() {

    swipe.iScroll({
      swipeDom:document.querySelector('.jd_category_right'),/*父容器对象*/
      swipeType:'y',/*滑动的方向*/
      swipeDistance:100/*缓冲的距离*/
    });

  };


})();