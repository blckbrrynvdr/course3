var blur = (function () {
  var wrapper = document.querySelector('.comments__form'),
    form = document.querySelector('.comments__form-blur');

    return {
      set: function () {
        var imgWidth = document.querySelector('.comments__bg').offsetWidth,
          posLeft = -wrapper.offsetLeft,
          posTop = -wrapper.offsetTop,
          blurCss = form.style;

        blurCss.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
        blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';

      }
    }

}());

blur.set();

window.onresize = function () {
  blur.set();
};