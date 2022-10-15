let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
    setUserName();
  };
  
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `MDN is cool, ${myName}`;
      }
  }