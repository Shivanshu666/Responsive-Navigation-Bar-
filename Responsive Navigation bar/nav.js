const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar"); // classs name return array lioke obeject nd we want single DOM elemnt

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-x");  // icon shotcut to use after click that icon is show 

  navbar.classList.toggle("active");  // choose element use active means when we click then show so choose active thene go to css 
  nav-bg.classList.toggle("active");

});
