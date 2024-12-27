document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); // Mencegah perilaku default navigasi

    // Hapus kelas "active" dari semua menu
    document.querySelectorAll("nav ul li").forEach(li => li.classList.remove("active"));
    this.parentElement.classList.add("active");

    // Hapus kelas "active" dari semua section
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));

    // Tambahkan kelas "active" pada section yang sesuai
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.classList.add("active");
      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    }
  });
});