
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);
(function($)
{
  "use strict";
    $.fn.windowManager = function()
    {
      return this.each(function(element, div){
        $(div).on("click", function(e){
          $(this).css({"z-index": "10"});
          $(e.currentTarget).stop().css({"z-index": "20"});
        });
      });
    };

    $.fn.iconeManager = function(){
      return this.each(function(element, icone){
        $(icone).css({'z-index':'10'});
        $(icone).on("click", function(e){
          var idButtonBar = e.currentTarget.nextElementSibling.className.split("window-")[1].split(" ")[0];
          $(e.currentTarget.nextElementSibling)
            .show()
            .css({"z-index": '10'})
            .removeClass("hide");
          $( "#"+idButtonBar).addClass("open");
        })
      });
    };
})(jQuery);

$(function() {
  "use strict";
  var windowManager = document.getElementsByClassName('window');
  var icone = document.getElementsByClassName('icone');
  var close = document.getElementsByClassName('close');
  var maximize = document.getElementsByClassName('maximize');
  var minimize = document.getElementsByClassName('minimize');
  var menuButton = document.getElementsByClassName('menubtn');

  $(windowManager).draggable({
    obstacle: "#body",
    //preventCollision: true,
    containment: "#body"
  }).windowManager().hide();
  $(icone).css({'z-index':'0'}).draggable().on('mousedown', function(){
    $(this).iconeManager();
  });
  $(icone).on('mouseup', function(){
    $(this).css({'z-index':'0'});
  });

  $(windowManager).each(function(index){
    $(windowManager[index]).on("click", function(e){
      $(windowManager).css({"z-index": "10"});
      $(e.currentTarget).stop().css({"z-index": "20"});
    });
  });

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(icone).each(function(index){
      $(icone[index]).on("click", function(e){
        var idButtonBar = e.currentTarget.nextElementSibling.className.split("window-")[1].split(" ")[0];
        $(e.currentTarget.nextElementSibling)
          .show()
          .css({"z-index": 10})
          .removeClass("hide");
        $( "#"+idButtonBar).addClass("open");
      })
    });
  }

  /*
    Permet d'ouvrir une fenetre grace au menu en bas
  */
  $(menuButton).each(function(index){
    $(menuButton[index]).on('click', function(e){
      var id = e.currentTarget.attributes[0].nodeValue;
      var window = document.getElementsByClassName("window window-"+id);
      $(window)
        .show()
        .css({"z-index": 10})
        .removeClass("hide");
      $( "#"+id).removeClass("reduce");
      $( "#"+id).addClass("open");
    })
  });

  /*
    Permet de reduire une fenetre
  */
  $(minimize).each(function(index){
    $(minimize[index]).on("click", function(e){
      var idButtonBar = e.currentTarget.offsetParent.className.split("window-")[1].split(" ")[0];
      $(e.target.offsetParent).hide().css({"z-index": 10,});
      $( "#"+idButtonBar).addClass("reduce");
    });
  });
  /*
    Permet d'agrandir une fenetre
  */
  $(maximize).each(function(index){
    $(maximize[index]).on("click", function(e){
      var clicks = $(this).data('clicks');
      if (clicks == true || typeof clicks === 'undefined') {
        clicks = true;
        $(e.target.offsetParent).addClass("agrandir");
      } else {
        clicks = false;
        $(e.target.offsetParent).removeClass("agrandir");
      }
      $(this).data("clicks", !clicks);
    });
  });

  /* 
  Permet de fermer les fenetre
  */
  $(close).each(function(index){
    $(close[index]).on("click", function(e){
      var window = $(e.target.offsetParent);
      var idButtonBar = window[0].className.split("window-")[1].split(" ")[0];
      window.stop().css("z-index", 1).addClass("hide").hide();
      $( "#"+idButtonBar).removeClass("open");
      $( "#"+idButtonBar).removeClass("reduce");
    })
  });
});