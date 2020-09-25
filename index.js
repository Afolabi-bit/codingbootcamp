var tanya = document.querySelector("#tanya-slide");
var tanyaImg = document.querySelector("#tanya");
var john = document.querySelector("#john-slide");
var johnImg = document.querySelector("#john");
var prev = document.querySelectorAll(".previous-btn");
var next = document.querySelectorAll(".next-btn");

john.classList.add("display");
var previous = function () {
  if (john.classList.contains("display")) {
    john.classList.remove("display");
    johnImg.classList.add("fade-anime");
    tanya.classList.add("display");
    tanyaImg.classList.remove("fade-anime");
  } else if (tanya.classList.contains("display")) {
    tanya.classList.remove("display");
    tanyaImg.classList.add("fade-anime");
    john.classList.add("display");
    johnImg.classList.remove("fade-anime");
  } else {
    //john.classList.add("display");
    //tanya.classList.remove("display", "fade-anime");
  }
};

prev.forEach((item) => item.addEventListener("click", previous));
next.forEach((item) => item.addEventListener("click", previous));
