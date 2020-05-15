const ageTag = document.getElementById("age");
const dob = new Date(1983, 10, 24);
ageTag.innerHTML = calculateAge(dob);

/* Add and remove "_" from menu */
document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.preventDefault();
    e.target.textContent += "_";
  });

  item.addEventListener("mouseout", (e) => {
    e.preventDefault();
    e.target.textContent = e.target.textContent.replace("_", "");
  });

  item.addEventListener("click", (e) => {
    //e.preventDefault();
    const element = document.getElementById(e.target.href.split("#")[1]);
    const header = element.querySelector(".type-writer");
    if (header.innerHTML === "") {
      let i = 0;
      typeWriter(header, i);
    }
  });
});

/* Add the typewriter effect for the element. This will be called when the section will be loaded*/
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
        if (entry.target.innerHTML === "") {
          let i = 0;
          typeWriter(entry.target, i);
          console.log(entry.target);
        }
      }
    });
  },
  { threshold: [1] }
);

document.querySelectorAll(".type-writer").forEach((item) => {
  observer.observe(item);
});

/* Calculate age from DOB */
function calculateAge() {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

/* Add the typewriter effect */
function typeWriter(typeElementLocal, i) {
  if (i < typeElementLocal.getAttribute("data").length) {
    typeElementLocal.innerHTML += typeElementLocal
      .getAttribute("data")
      .charAt(i);
    i++;
    setTimeout(typeWriter, 50, typeElementLocal, i);
  }
}
