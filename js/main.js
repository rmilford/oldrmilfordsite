//"use strict";
var modal = document.getElementById('closeupmodal');
var modalBtn = document.getElementsByClassName('clickable');
var modalCloseBtn = document.getElementsByClassName('closemodalbtn')[0];
var modalContent = document.getElementById('modalcontent');
var modalFooter = document.getElementById('modalfooter');
var myIndex=0;

for (var i = 0, len = modalBtn.length; i < len; i++) {
  modalBtn[i].addEventListener('click',openModal);
}
modalCloseBtn.addEventListener('click',closeModal);
window.addEventListener('click',clickOutside);

function openModal(e){
  myIndex=0;
  modal.style.display='block';
  var modalSize = '36%';
  testExp = new RegExp('Android|webOS|iPhone|iPad|' +
             'BlackBerry|Windows Phone|'  +
             'Opera Mini|IEMobile|Mobile' ,
            'i');

  if (testExp.test(navigator.userAgent)) {
    modalSize = '70%';
    alert('Small Browser Detected')
  }
  var clickedClass = e.srcElement.className.split(' ')[2];
  if (clickedClass == 'stillView') {
    modalContent.innerHTML = '<img class="work-preview still-slide" src="images/daenerys.png" alt="Sample Illustrations"/><img class="work-preview still-slide" src="images/john-snow.png" alt="Sample Illustrations"/><img class="work-preview still-slide" src="images/summer-fun.png" alt="Sample Illustrations"/>';
    modalContent.style.width = modalSize;
    modalFooter.style.width = modalSize;
    slideCarousel('still-slide');
  }
  else if (clickedClass == 'animatedView') {
    modalContent.innerHTML = '<img class="work-preview animated-slide" src="images/color-lips.gif" alt="Sample Animated GIF"/><img class="work-preview animated-slide" src="images/drinks.gif" alt="Sample Animated GIF"/><img class="work-preview animated-slide" src="images/giphy.gif" alt="Sample Animated GIF"/>';
    modalContent.style.width = modalSize;
    modalFooter.style.width = modalSize;
    slideCarousel("animated-slide");
  }
  else if (clickedClass == 'videoView') {
    modalContent.innerHTML = '<video class="work-preview video-slide" controls><source src="images/daenerys1.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>';
    modalContent.style.width = modalSize;
    modalFooter.style.width = modalSize;
    var y = document.getElementsByClassName("w3-badge");
    for (i = 0; i < y.length; i++) {
      y[i].style.visibility = "hidden";
    }
  }
  else if (clickedClass == 'productView') {
    modalContent.innerHTML = '<img class="work-preview product-slide" src="images/chubby-unicorn.png" alt="Sample Products"/><img class="work-preview product-slide" src="images/LoveTote.png" alt="Sample Products"/><img class="work-preview product-slide" src="images/HighLowCoffeeMug.png" alt="Sample Products"/>';
    modalContent.style.width = modalSize;
    modalFooter.style.width = modalSize;
    slideCarousel("product-slide");
  }
}

function closeModal(){
  modal.style.display='none';
  modalContent.innerHTML = '';
  modalContent.style.width = '70%';
  modalFooter.style.width = '70%';
  var y = document.getElementsByClassName("w3-badge");
  for (i = 0; i < y.length; i++) {
    y[i].style.visibility = "visible";
  }
}

function clickOutside(e){
  if (e.target == modal) {
    modal.style.display='none';
    modalContent.innerHTML = '';
    modalContent.style.width = '70%';
    var y = document.getElementsByClassName("w3-badge");
    for (i = 0; i < y.length; i++) {
      y[i].style.visibility = "visible";
    }
  }
}

function menuToggle() {
    var x = document.getElementsByClassName("nav")[0];
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function slideCarousel(myClass) {
  var i=0;
  var x = document.getElementsByClassName(myClass);
  var y = document.getElementsByClassName("w3-badge");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    if (y[i].className.substring(y[i].className.lastIndexOf(' ')+1,y[i].className.length)=='w3-white') {
      y[i].className = y[i].className.substring(0,y[i].className.lastIndexOf(' '));
    }
  }
  myIndex++;
  if (myIndex >= x.length) {myIndex = 0}
  x[myIndex].style.display = "block";
  y[myIndex].className += ' w3-white';
  setTimeout(function() {
    slideCarousel(myClass);
  }, 4000); // Change image every 2 seconds
}
