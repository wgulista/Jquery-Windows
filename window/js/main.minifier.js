!function(e){function n(e,n){if(!(e.originalEvent.touches.length>1)){e.preventDefault();var t=e.originalEvent.changedTouches[0],o=document.createEvent("MouseEvents");o.initMouseEvent(n,!0,!0,window,1,t.screenX,t.screenY,t.clientX,t.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(o)}}if(e.support.touch="ontouchend"in document,e.support.touch){var t,o=e.ui.mouse.prototype,s=o._mouseInit,i=o._mouseDestroy;o._touchStart=function(e){var o=this;!t&&o._mouseCapture(e.originalEvent.changedTouches[0])&&(t=!0,o._touchMoved=!1,n(e,"mouseover"),n(e,"mousemove"),n(e,"mousedown"))},o._touchMove=function(e){t&&(this._touchMoved=!0,n(e,"mousemove"))},o._touchEnd=function(e){t&&(n(e,"mouseup"),n(e,"mouseout"),this._touchMoved||n(e,"click"),t=!1)},o._mouseInit=function(){var n=this;n.element.bind({touchstart:e.proxy(n,"_touchStart"),touchmove:e.proxy(n,"_touchMove"),touchend:e.proxy(n,"_touchEnd")}),s.call(n)},o._mouseDestroy=function(){var n=this;n.element.unbind({touchstart:e.proxy(n,"_touchStart"),touchmove:e.proxy(n,"_touchMove"),touchend:e.proxy(n,"_touchEnd")}),i.call(n)}}}(jQuery),function(e){"use strict";e.fn.windowManager=function(){return this.each(function(n,t){e(t).on("click",function(n){e(this).css({"z-index":"10"}),e(n.currentTarget).stop().css({"z-index":"20"})})})},e.fn.iconeManager=function(){return this.each(function(n,t){e(t).css({"z-index":"10"}),e(t).on("click",function(n){var t=n.currentTarget.nextElementSibling.className.split("window-")[1].split(" ")[0];e(n.currentTarget.nextElementSibling).show().css({"z-index":"10"}).removeClass("hide"),e("#"+t).addClass("open")})})}}(jQuery),$(function(){"use strict";var e=document.getElementsByClassName("window"),n=document.getElementsByClassName("icone"),t=document.getElementsByClassName("close"),o=document.getElementsByClassName("maximize"),s=document.getElementsByClassName("minimize"),i=document.getElementsByClassName("menubtn");$(e).draggable({obstacle:"#body",containment:"#body"}).windowManager().hide(),$(n).css({"z-index":"0"}).draggable().on("mousedown",function(){$(this).iconeManager()}),$(n).on("mouseup",function(){$(this).css({"z-index":"0"})}),$(e).each(function(n){$(e[n]).on("click",function(n){$(e).css({"z-index":"10"}),$(n.currentTarget).stop().css({"z-index":"20"})})}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&$(n).each(function(e){$(n[e]).on("click",function(e){var n=e.currentTarget.nextElementSibling.className.split("window-")[1].split(" ")[0];$(e.currentTarget.nextElementSibling).show().css({"z-index":10}).removeClass("hide"),$("#"+n).addClass("open")})}),$(i).each(function(e){$(i[e]).on("click",function(e){var n=e.currentTarget.attributes[0].nodeValue,t=document.getElementsByClassName("window window-"+n);$(t).show().css({"z-index":10}).removeClass("hide"),$("#"+n).removeClass("reduce"),$("#"+n).addClass("open")})}),$(s).each(function(e){$(s[e]).on("click",function(e){var n=e.currentTarget.offsetParent.className.split("window-")[1].split(" ")[0];$(e.target.offsetParent).hide().css({"z-index":10}),$("#"+n).addClass("reduce")})}),$(o).each(function(e){$(o[e]).on("click",function(e){var n=$(this).data("clicks");1==n||"undefined"==typeof n?(n=!0,$(e.target.offsetParent).addClass("agrandir")):(n=!1,$(e.target.offsetParent).removeClass("agrandir")),$(this).data("clicks",!n)})}),$(t).each(function(e){$(t[e]).on("click",function(e){var n=$(e.target.offsetParent),t=n[0].className.split("window-")[1].split(" ")[0];n.stop().css("z-index",1).addClass("hide").hide(),$("#"+t).removeClass("open"),$("#"+t).removeClass("reduce")})})});