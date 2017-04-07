var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello Zheng!';

var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/web-projects/test-site/images/timg.jpg'){
      myImage.setAttribute ('src','/web-projects/test-site/images/timg2.jpg');
    }else{
      myImage.setAttribute ('src','/web-projects/test-site/images/timg.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

