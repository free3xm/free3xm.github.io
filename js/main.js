window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
      preloader.classList.add("preloader_none");
      setTimeout(()=> preloader.style.display = "none", 1000);
    },1500
  );
});
document.addEventListener("DOMContentLoaded", () => {
  const navBtns = document.querySelectorAll(".menu_list li"),
        navLinks = document.querySelectorAll(".menu_link"),
        pagesList = document.querySelectorAll(".section"),
        bg = document.querySelector(".bg"),
        filters = document.querySelectorAll(".filter_item"),
        portfolioItems = document.querySelectorAll('.portfolio_item'),
        gambMenu = document.querySelector(".gamb_menu"),
        menu = document.querySelector(".menu");


  if(document.documentElement.clientWidth <= 750){
    menu.classList.add("menu_none");
  }

  gambMenu.addEventListener("click", () => {
    menu.classList.toggle("menu_none");
    gambMenu.classList.toggle("gamb_menu_active");
  });

  navBtns.forEach((e, i) => {
    e.addEventListener("click", () =>{
      navLinks.forEach(e => e.classList.remove("menu_link_active"));
      navLinks[i].classList.add("menu_link_active");
      pagesList.forEach(e => e.classList.add("hide"));
      gambMenu.classList.remove("gamb_menu_active");
      bg.classList.remove("blur");
      if(document.documentElement.clientWidth <= 750) menu.classList.add("menu_none");
      if(i != 0){
        setTimeout(() => { pagesList[i-1].classList.remove("hide");}, 500);
        bg.classList.add("blur");
      }
    });
  });
  filters.forEach((e, i) => e.addEventListener("click", () => {
    filters.forEach(e => e.classList.remove("filter_active"));
    e.classList.add("filter_active");
    portfolioItems.forEach(e => e.classList.add("portfolio_hide"));
    if(i == 1){
      portfolioItems.forEach((e) => e.getAttribute("data-filter") == 1 ? e.classList.remove("portfolio_hide") : false);
    } else if(i ==  2){
      portfolioItems.forEach((e) => e.getAttribute("data-filter") == 2 ? e.classList.remove("portfolio_hide") : false);
    } else if(i == 3){
      portfolioItems.forEach((e) => e.getAttribute("data-filter") == 3 ? e.classList.remove("portfolio_hide") : false);
    } else {
      portfolioItems.forEach(e => e.classList.remove("portfolio_hide"));
    }
  }));
});
