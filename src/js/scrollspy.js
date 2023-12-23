/* ## SETUP SCROLL SPY
--------------------------------------------- */
let menuSection = document.querySelectorAll(".nav-primary li.menu-item a");
// for clickable event
menuSection.forEach((v) => {
  v.onclick = () => {
    setTimeout(() => {
      menuSection.forEach((j) => j.classList.remove("active"));
      v.classList.add("active");
    }, 300);
  };
});
// for window scrolldown event
window.onscroll = () => {
  let mainSection = document.querySelectorAll(
    "main section"
  );

  mainSection.forEach((v, i) => {
    let rect = v.getBoundingClientRect().y;

    if (rect < window.innerHeight - window.innerHeight + 100) {
      /* caculate till section reaches to top */
      menuSection.forEach((v) => v.classList.remove("active"));
      menuSection[i].classList.add("active");
    }
  });
};
