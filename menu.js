function toggleMenu() {
    var menuContent = document.getElementById("menuContent");
    if (menuContent.style.display === "none" || menuContent.style.display === "") {
      menuContent.style.display = "block";
    } else {
      menuContent.style.display = "none";
    }
  }
  
  