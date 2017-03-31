/**
 * Created by qiangxl on 2017/3/30.
 */
$(function () {
  var oBannerBox=$(".jd_banner");
  var oImageBox=$(".jd_banner ul:first-child");
  var oPointBox=$(".jd_banner ul:last-child");
  var aPoints=oPointBox.find("li");
  var width=oBannerBox.width();
  var index=1;
  //禁止拖动
  document.ontouchmove=function (e) {
    e.preventDefault();
  };
  //运动函数
  function fnAnimate(callback) {
    oImageBox.animate({transform:"translateX("+(-index*width)+"px)"},400,"ease",function () {
      if(index==9)
      {
        index=1;

      }
      else if(index==0)
      {

        index=8;

      }
      else
      {
        oImageBox.css({transform:"translateX("+(-index*width)+"px)"});
        aPoints.each(function () {
          this.className="";
        });
        aPoints[index-1].className="now";
      };

    });

    callback&&callback();
  };

  // 定时器
  var timer=setInterval(function () {
    index++;
    fnAnimate();
  },3000);

  oImageBox.on("swipeLeft",function () {
      index++;
      clearInterval(timer);
      fnAnimate(function () {
        timer=setInterval(function () {
          index++;
          fnAnimate();
        },3000);
      });

  });

  oImageBox.on("swipeRight",function () {
      index--;
      clearInterval(timer);
      fnAnimate(function () {
        timer=setInterval(function () {
          index++;
          fnAnimate();
        },3000);
      });
  });

});
