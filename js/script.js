document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function() {
      document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
      const target = document.querySelector(this.getAttribute("href"));
      target.classList.add("active");
    });
  });