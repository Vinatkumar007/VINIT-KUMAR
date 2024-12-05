// 
// this is right code of scroll 
// 
// 

// function trgt() {
//     var target = document.getElementById("data");
//     target.scrollIntoView({ behavior: "smooth" });
//   }

//   function trgt1() {
//     var target = document.getElementById("main");
//     target.scrollIntoView({ behavior: "smooth" });
//   }
//   function trgt2() {
//     var target = document.getElementById("project");
//     target.scrollIntoView({ behavior: "smooth" });
//   }
//   function trgt3() {
//     var target = document.getElementById("contact");
//     target.scrollIntoView({ behavior: "smooth" });
//   }
//   function btn() {
//     var tgt = document.getElementById("from");
//     tgt.scrollIntoView({ behavior: "smooth" });
//   }


// 
// 
// SCROLL WORKS IS THIS 
// 
// 
function scrollToTarget(targetType) {
    var targetId;
    
    // Determine the target ID based on the targetType
    if (targetType === 'data') {
      targetId = 'data';
    } else if (targetType === 'main') {
      targetId = 'main';
    } else if (targetType === 'project') {
      targetId = 'project';
    } else if (targetType === 'contact') {
      targetId = 'contact';
    } else if (targetType === 'from') {
      targetId = 'from';
    } else {
      console.warn('Invalid target type');
      return;
    }
  
    var target = document.getElementById(targetId);
    
    
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Element with ID "' + targetId + '" not found.');
    }
  }
  
  // Usage examples
  function trgt() {
    scrollToTarget('data');
  }
  
  function trgt1() {
    scrollToTarget('main');
  }
  
  function trgt2() {
    scrollToTarget('project');
  }
  
  function trgt3() {
    scrollToTarget('contact');
  }
  
  function btn() {
    scrollToTarget('from');
  }
//   
// 
//  this is form js ;
// 
// 
var document=document
.getElementById("loginForm")
.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get the values from the form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple validation (replace this with actual validation and authentication)
  if (username === "admin" && password === "password") {
    alert("Login successful!");
    // Redirect or perform other actions here
  } else {
    document
      .getElementById("error-message")
      .classList.remove("hidden");
  }
});




var nav = document.getElementById("nav");

function size() {
  nav.classList.toggle("manu");
  
}
const init = document.querySelector("#daa");
console.log(init);

// hhksbbcuvugcw

totl.addEventListener("mouseclick",setdark);
totl.addEventListener("mouseout",setlight);

function  setdark (){
  document.body.style.background ="green";
  totl.style.color = "black";

}
function  setlight (){
  document.body.style.background ="blue";
  totl.style.color = "black";

}


  