(function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");

  function setOpen(open) {
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "Close" : "Menu";
  }

  btn.addEventListener("click", function () {
    setOpen(!nav.classList.contains("open"));
  });

  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      setOpen(false);
      btn.focus();
    }
  });

  var form = document.getElementById("contact-form");
  var note = document.getElementById("form-note");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var to = form.getAttribute("data-email");
      var name = form.elements["name"].value.trim();
      var email = form.elements["email"].value.trim();
      var need = form.elements["need"].value;
      var message = form.elements["message"].value.trim();
      var subject = "Website inquiry: " + need + " (" + name + ")";
      var body = "Name: " + name + "\nEmail: " + email + "\nLooking to: " + need + "\n\n" + message;
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      note.textContent = "If your email app didn't open, please email us directly at " + to + ".";
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
