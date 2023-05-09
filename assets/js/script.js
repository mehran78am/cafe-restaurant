const navbar = document.getElementById("navbar");
      const btn = document.getElementById("showbtn");
      const close = document.getElementById("closebtn");
      btn.addEventListener("click", function () {
        navbar.classList.toggle("show");
      });
      close.addEventListener("click", function () {
        navbar.classList.remove("show");
      });