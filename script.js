/* スムーズスクロールアニメーション */
function LinkClick(id) {
  var top = getElementAbsoluteTop(id);
  scrollScreen(top, 20);
  return false;
}

function getElementAbsoluteTop(id) {
  var target = document.getElementById(id);
  var rect = target.getBoundingClientRect();
  return rect.top;
}

function scrollScreen(desty, time) {
  var top = Math.floor(document.documentElement.scrollTop || document.body.scrollTop);
  var tick = desty / time;

  var newy = top + tick;
  document.documentElement.scrollTop = newy;
  setTimeout(function () { scrollScreenInt(top, desty, newy, tick); }, 20);
}

function scrollScreenInt(starty, desty, newy, tick) {
  var stop = true;

  var newy = newy + tick;
  if (desty < 0) {
    if (starty + desty < newy) {
      stop = false;
    } else {
      newy = starty + desty;
    }
  } else {
    if (newy < starty + desty) {
      stop = false;
    } else {
      newy = starty + desty;
    }
  }

  document.documentElement.scrollTop = newy;
  if (stop == false) {
    setTimeout(function () { scrollScreenInt(starty, desty, newy, tick); }, 20);
  }
}

/* スクロールフェイドアニメーション */
var scrollAnimationElm = document.querySelectorAll('.fade');
var scrollAnimationFunc = function () {
  for (var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 300;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);
