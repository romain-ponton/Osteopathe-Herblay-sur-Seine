let _btnScrollTop = document.getElementById("btnScrollTop");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    _btnScrollTop.style.display = "block";
  } else {
    _btnScrollTop.style.display = "none";
  }
}