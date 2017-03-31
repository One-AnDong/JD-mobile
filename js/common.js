/**
 * Created by qiangxl on 2017/3/26.
 */
window.common = {};
common.transitionEnd = function (dom,callback)
{

  if(dom && typeof dom =="object")
  {

    dom.addEventListener("webkitTransitionEnd",function ()
    {
      callback && callback();
    });

    dom.addEventListener("transitionEnd",function ()
    {
      callback && callback();
    });
  };
};
common.tap=function (dom,callback)
{
  if(dom && typeof dom =="object")
  {
    var isMove=false;
    var startTime=0;
    dom.addEventListener("touchstart",function (e) {
        startTime=Date.now();
    });
    dom.addEventListener("touchmove",function (e)
    {
      isMove=true;
    });
    dom.addEventListener("touchend",function (e)
    {
      if(!isMove&&(Date.now()-startTime)<150)
      {
        callback&&callback(e);
      };
      isMove=false;
      startTime=0;
    });



  };

}