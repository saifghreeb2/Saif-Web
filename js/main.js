// Title In Header  On Clicke  Reload

// Get Element Title
let title = document.querySelector(".container .logo");

//
title.onclick = function () {
  window.location.reload();
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Select Skills Selctor
let skl = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog span");

// Increase Numbers On Scrolling
let nums = document.querySelectorAll(".box .num");
let sec = document.querySelector(".stat");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= skl.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
    // count
    if (window.scrollY >= sec.offsetTop) {
      if (!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }
  }
};

function startCount(el) {
  let gole = el.dataset.num;
  let count = setInterval(function () {
    el.textContent++;
    if (el.textContent == gole) {
      clearInterval(count);
    }
  }, 10);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
