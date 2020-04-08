/* サウンドクラウド遅延読み込み */
const soundcloudLazyLoad = () => {
  const soundcloud__box = document.getElementById('soundcloud__box');
  if (document.querySelectorAll(`iframe`).length < 3) {
    const addiframe = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/524995878&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/436346583&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>';
    soundcloud__box.insertAdjacentHTML('beforebegin', addiframe);
  }
}
window.addEventListener('scroll', soundcloudLazyLoad, { once: true });

/* スクロールフェイドアニメーション */
const scrollAnimationElm = document.querySelectorAll('.fade');
const scrollAnimationFunc = () => {
  for (let i = 0; i < scrollAnimationElm.length; i++) {
    const triggerMargin = 300;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

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
