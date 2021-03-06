// Generated by CoffeeScript 1.7.1
(function() {
  var __slice = [].slice;

  (function($) {
    return $(function() {
      var $b, $block, $blockContent, $blockh1, $blockh2, $blockp, $doc, $h, $html, $pag, $slider, $win, currentScheme, doSlider, fadeFinish, fadeStart, findSlideBkImgById, findSlideById, findSlideSchemeById, mobile, numSlides, propsFinal, propsInit, sliderFinish, sliderInit, width;
      $win = $(window);
      $doc = $(document);
      $slider = $('#slider');
      $h = $('#h,#h-showcase');
      $b = $('body');
      $html = $('html');
      width = $win.width();
      mobile = width < 950;
      $win.resize(function() {
        width = $win.width();
        return mobile = width < 950;
      });
      numSlides = $slider.children().length;
      currentScheme = null;
      findSlideById = function(slideId) {
        return $slider.find('.slidesjs-slide[slidesjs-index="' + (slideId - 1).toString() + '"]');
      };
      findSlideSchemeById = function(slideId) {
        return findSlideById(slideId).attr('data-scheme');
      };
      findSlideBkImgById = function(slideId) {
        return findSlideById(slideId).hasClass('bg-img');
      };
      sliderInit = function(slideNum) {
        var scheme;
        scheme = findSlideSchemeById(slideNum);
        $h.addClass(scheme);
        $slider.addClass(scheme);
        currentScheme = scheme;
        if ((findSlideBkImgById(slideNum)) !== $h.hasClass('shadow')) {
          return $h.toggleClass('shadow');
        }
      };
      sliderFinish = function(slideNum) {
        var newScheme;
        newScheme = findSlideSchemeById(slideNum);
        if (currentScheme !== newScheme) {
          $h.toggleClass('light');
          $h.toggleClass('dark');
          $slider.toggleClass('light');
          $slider.toggleClass('dark');
          currentScheme = newScheme;
        }
        if ((findSlideBkImgById(slideNum)) !== $h.hasClass('shadow')) {
          return $h.toggleClass('shadow');
        }
      };
      doSlider = function(interval) {
        var args;
        if (interval == null) {
          interval = 5000;
        }
        args = {
          width: width,
          height: $(window).height(),
          navigation: {
            active: false
          },
          pagination: {
            active: true,
            effect: "fade"
          },
          play: {
            active: false,
            effect: "fade",
            interval: interval,
            auto: true,
            pauseOnHover: false
          },
          fade: {
            speed: 10000,
            crossfade: true
          },
          callback: {
            loaded: sliderInit,
            complete: sliderFinish
          }
        };
        return $slider.slidesjs(args);
      };
      propsInit = {
        opacity: 0,
        '-ms-filter': '"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"'
      };
      propsFinal = {
        opacity: 1,
        '-ms-filter': '"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"'
      };
      fadeStart = function() {
        var $sel, $sels, _i, _len;
        $sels = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        for (_i = 0, _len = $sels.length; _i < _len; _i++) {
          $sel = $sels[_i];
          $sel.css(propsInit);
        }
        $doc.one('dblclick', function() {
          var _j, _len1;
          for (_j = 0, _len1 = $sels.length; _j < _len1; _j++) {
            $sel = $sels[_j];
            $sel.stop(true, true);
            $sel.css(propsFinal);
          }
          return fadeFinish();
        });
        $b.addClass('fade-in-progress');
        return $b.css('position', 'fixed');
      };
      fadeFinish = function() {
        $b.removeClass('fade-in-progress');
        return $b.css('position', 'static');
      };
      $block = null;
      if (numSlides === 0) {
        $block = $('#m .block:first');
        if (!mobile && $block.hasClass('fade')) {
          $blockh1 = $block.find('h1');
          $blockh2 = $block.find('h2');
          $blockp = $block.find('p');
          $blockContent = $block.find('.block-content');
          fadeStart($block, $h, $blockh1, $blockh2, $blockp, $blockContent);
          $block.delay(1500).animate(propsFinal, 3000);
          $blockh1.delay(5000).animate(propsFinal, 1500);
          $blockh2.delay(8000).animate(propsFinal, 1500);
          $blockp.delay(11000).animate(propsFinal, 1500);
          $blockContent.delay(11000).animate(propsFinal, 1500);
          return $h.delay(11000).animate(propsFinal, 1500, 'swing', fadeFinish);
        }
      } else {
        $block = $slider.find('.block:first');
        if (!mobile && $block.hasClass('fade')) {
          doSlider(17500);
          $pag = $slider.find('.slidesjs-pagination');
          $blockh1 = $block.find('h1');
          $blockh2 = $block.find('h2');
          $blockp = $block.find('p');
          $blockContent = $block.find('.block-content');
          fadeStart($block, $h, $pag, $blockh1, $blockh2, $blockp, $blockContent);
          $block.delay(1500).animate(propsFinal, 3000);
          $blockh1.delay(5000).animate(propsFinal, 1500);
          $blockh2.delay(8000).animate(propsFinal, 1500);
          $blockp.delay(11000).animate(propsFinal, 1500);
          $blockContent.delay(11000).animate(propsFinal, 1500);
          $pag.delay(11000).animate(propsFinal, 1500);
          return $h.delay(11000).animate(propsFinal, 1500, 'swing', fadeFinish);
        } else if (!mobile) {
          return doSlider();
        }
      }
    });
  })(jQuery);

}).call(this);
