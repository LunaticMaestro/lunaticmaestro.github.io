let myImage = document.querySelector("img")
let userButton=document.querySelector("button")
let myHeading=document.querySelector('h1')

/* function decalrations */
function changeImage(){
    let imgSrc=myImage.getAttribute('src');
    if(imgSrc === 'images/firefox1.png') {
        myImage.setAttribute ('src','images/firefox2.png');
      } else {
        myImage.setAttribute ('src','images/firefox1.png');
      }
}

function setUserName(){
    let userName=prompt("Hi! What shall i call you ?")
    if(userName!=null){
        localStorage.setItem('name', userName)
        myHeading.textContent="Greetings "+userName+", from Mozilla";
    }
}

/* default page initializtions*/
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

/* functions caller */
myImage.onclick     =function(){changeImage()}
userButton.onclick  =function(){setUserName()}


