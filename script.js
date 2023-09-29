const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
navbar.classList.toggle("active");
navToggler.classList.toggle("active");

document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);
addEventOnElem(navbarLinks, "click", toggleNavbar);
var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var liveprice = {
  "async": true,
  "scroosDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

  "method": "GET",
  "headers": {}
}

$.ajax(liveprice).done(function (response){
  btc.innerHTML = `$ `+response.bitcoin.usd;
  ltc.innerHTML = `$ `+response.litecoin.usd;
  eth.innerHTML = `$ `+response.ethereum.usd;
  doge.innerHTML = `$ `+response.dogecoin.usd;

});



document.addEventListener("DOMContentLoaded", function () {
  // Get references to the elements you want to reveal
  const heroContent = document.querySelector(".hero-content");
  const coinPrices = document.querySelectorAll(".coin-price");
  const instruction = document.querySelectorAll(".instruction-card");
  // Function to check if an element is in the viewport
  function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Function to handle the scroll event
  function handleScroll() {
      // Check if the hero content is in the viewport
      if (isElementInViewport(heroContent)) {
          heroContent.style.opacity = "1";
          heroContent.style.transform = "translateY(0)";
      }

      // Check if each coin price section is in the viewport
      coinPrices.forEach((price) => {
          if (isElementInViewport(price)) {
              price.style.opacity = "1";
              price.style.transform = "translateY(0)";
          }
      });
     
  }

  // Add a scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Initial check for elements in the viewport
  handleScroll();
  
});