var bubbles = document.querySelectorAll(".switch-hover");
var switchGroups = document.querySelectorAll(".switch-flex");
var buttons = document.querySelectorAll(".button");

switchGroups.forEach(function(group) {
  var bubble = group.querySelector(".switch-hover");
  var links = group.querySelectorAll(".switch");
  var linkGrid = group.querySelector(".grid-switch");
  var linkList = group.querySelector(".list-switch");

  links.forEach(item => {
    item.addEventListener("click", function(event) {
      if (event.target.classList.contains("grid-switch")) {
        bubble.classList.remove("list-active");
        bubble.classList.remove("switch-hover-green");
        bubble.classList.add("grid-active");
        linkList.classList.remove("active");
        linkGrid.classList.add("active");
      } else if (event.target.classList.contains("list-switch")) {
        bubble.classList.remove("grid-active");
        bubble.classList.add("list-active");
        bubble.classList.add("switch-hover-green");
        linkGrid.classList.remove("active");
        linkList.classList.add("active");
      }
    }, false);

    item.addEventListener("mouseenter", function(event) {
      var width = event.target.clientWidth + "px";
      bubble.style.width = width;
      if (event.target.classList.contains("grid-switch")) {
        bubble.style.left = "4px";
        links.forEach(linkItem => {
          linkItem.classList.remove("active");
        });
        linkGrid.classList.add("active");
      } else if (event.target.classList.contains("list-switch")) {
        bubble.style.left = 4 + linkGrid.clientWidth + "px";
        links.forEach(linkItem => {
          linkItem.classList.remove("active");
        });
        linkList.classList.add("active");
      }
    }, false);

    item.addEventListener("mouseleave", function(event) {
      if (bubble.classList.contains("grid-active")) {
        bubble.style.width = linkGrid.clientWidth + "px";
        bubble.style.left = "4px";
        links.forEach(linkItem => {
          linkItem.classList.remove("active");
        });
        linkGrid.classList.add("active");
      }
      if (bubble.classList.contains("list-active")) {
        bubble.style.width = linkList.clientWidth + "px";
        bubble.style.left = 4 + linkGrid.clientWidth + "px";
        links.forEach(linkItem => {
          linkItem.classList.remove("active");
        });
        linkList.classList.add("active");
      }
    }, false);
  });

  if (bubble.classList.contains("grid-active")) {
    bubble.style.width = linkGrid.clientWidth + "px";
    bubble.style.left = "4px";
  }
});

buttons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    bubbles.forEach(function(bubble) {
      bubble.classList.remove("switch-hover-green");
    });
  });
});
