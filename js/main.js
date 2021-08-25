//menu links

let navLinks = document.querySelectorAll(".header__nav-link");

let delClasses = function (objects, delClass) {
  for (let obj of objects) {
    obj.classList.remove(delClass);
  }
};

for (let link of navLinks) {
  link.addEventListener("click", function (e) {
    e.preventDefault;
    delClasses(navLinks, "header__nav-link--active");
    link.classList.add("header__nav-link--active");
  });
}

let navList = document.querySelector(".header__nav-list");

//open menu

let menuBtn = document.querySelector(".header__nav-btn");

menuBtn.addEventListener("click", function () {
  navList.classList.add("header__nav-list--active");
});

//close menu

let closeMenuBtn = document.querySelector(".header__nav-close");

closeMenuBtn.addEventListener("click", function () {
  navList.classList.remove("header__nav-list--active");
});
