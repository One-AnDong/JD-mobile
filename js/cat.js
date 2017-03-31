/**
 * Created by qiangxl on 2017/3/28.
 */
;(function ()
{
  fnCat();

  function fnCat() {
      var oWin=document.querySelector(".jd_win");
      var oWinBox=oWin.querySelector(".jd_win_box");
      var aDeleteBox=document.querySelectorAll(".delete_box");
      var oBtnCancel=document.querySelector(".btn_cancel");
      var oDeleteSpan=document.querySelector(".delete_box span:first-child");
      // 动画弹出框
      for(var i=0;i<aDeleteBox.length;i++)
      {
        aDeleteBox[i].onclick=function () {
          oWin.style.display="block";
          oWinBox.className="jd_win_box down";
          //添加过渡效果
          oDeleteSpan.style.transition="all .6s";
          oDeleteSpan.style.webkitTransition="all .6s";
          //设置旋转原点
          oDeleteSpan.style.transformOrigin="0 4px";
          //设置旋转
          oDeleteSpan.style.transform="rotate(-30deg) translateY(1px)";
          oDeleteSpan.style.webkitTransform="rotate(-30deg) translateY(1px)";

        };
      };
      // 取消按钮
      oBtnCancel.onclick=function () {
        //收回弹出框
        oWin.style.display="none";
        //清除旋转
        oDeleteSpan.style.transform="none";
        oDeleteSpan.style.webkitTransform="none";
      };
  };
})();