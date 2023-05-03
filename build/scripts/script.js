const navIndicator = document.querySelector(".navIndicator");
const navItems = document.querySelectorAll(".navItems");
const mobileNav = document.querySelector(".mobileNav");
const home = document.querySelectorAll(".home");
const project = document.querySelectorAll(".project");
const cards = document.querySelectorAll(".card");
const card1 = document.querySelector(".card1");
const goal = document.querySelectorAll(".goal");
const gallery = document.querySelector(".gallery");
const homeSection = document.querySelector(".homeSection");
const projectSection = document.querySelector(".projectSection");
const goalSection = document.querySelector(".goalSection");
const inpName = document.querySelector("#inpName");
const inpEmail = document.querySelector("#inpEmail");
const inpMsg = document.querySelector("#inpMsg");
const clearBtn = document.querySelector(".clearBtn");

function activelink() {
  navItems.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", activelink);
});
function checkCardisattop() {
  console.log(projectSection.offsetTop);
}
// projectSection.addEventListener("scroll",()=>{
//     if(projectSection.scrollTop==0){
//         projectSection.classList.add('AtTop')
//     }
//     else if(projectSection.scrollTop===(projectSection.scrollHeight-projectSection.offsetHeight)){
//         projectSection.classList.add('AtBottom')
//     }
//     else{
//         projectSection.classList.remove('AtTop')
//         projectSection.classList.remove('AtBottom')
//     }
// });
function scrollDetect() {
  var lastScroll = 0;
  let t = 100;
  let b = 0;

  projectSection.onscroll = function () {
    let currentScroll = projectSection.scrollTop; // Get Current Scroll Value

    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll;
      console.log("Scrolling DOWN");
      if (t >= 10) {
        t = t - 10;
      }
      projectSection.style.setProperty("--maskTop", t);
      if (
        projectSection.scrollHeight -
          projectSection.clientHeight -
          projectSection.scrollTop <
        100
      ) {
        if (b <= 90) {
          b = b + 20;
        }
        projectSection.style.setProperty("--maskBottom", b);
      }
    } else {
      lastScroll = currentScroll;
      console.log("Scrolling UP");
      if (projectSection.scrollTop < 100) {
        if (t <= 90) {
          t = t + 10;
        }
        projectSection.style.setProperty("--maskTop", t);
      }

      if (b >= 10) {
        b = b - 10;
      }
      projectSection.style.setProperty("--maskBottom", b);
    }
  };
}

scrollDetect();

function isScrollable() {
  if (
    projectSection.scrollHeight - projectSection.scrollTop ===
    projectSection.clientHeight
  ) {
    projectSection.style.setProperty("--maskBottom", 100);
  }
  console.log(projectSection.scrollHeight);
}
isScrollable();

project.forEach((project) => {
  project.addEventListener("click", () => {
    homeSection.style.opacity = "0";
    projectSection.style.opacity = "1";
    goalSection.style.opacity = "0";
    projectSection.classList.add("active");
    let i = 0;
    cards.forEach((card) => {
      card.setAttribute("style", `--animation-index:${i}`);
      i++;
    });
  });
});

home.forEach((home) => {
  home.addEventListener("click", () => {
    homeSection.style.opacity = "1";
    projectSection.style.opacity = "0";
    projectSection.classList.remove("active");
    goalSection.style.opacity = "0";
  });
});
goal.forEach((goal) => {
  goal.addEventListener("click", () => {
    goalSection.style.opacity = "1";
    projectSection.style.opacity = "0";
    projectSection.classList.remove("active");
    homeSection.style.opacity = "0";
  });
});

function checkForNull() {
  if (inpName.value || inpEmail.value || inpMsg.value) {
    clearBtn.removeAttribute("disabled", "");
    clearBtn.classList.remove("opacity-80");
  } else {
    clearBtn.setAttribute("disabled", "");
    clearBtn.classList.add("opacity-80");
  }
}

function clearText() {
  inpName.value = "";
  inpEmail.value = "";
  inpMsg.value = "";
  clearBtn.setAttribute("disabled", "");
  clearBtn.classList.add("opacity-80");
}

$("body").bind("swipeup", () => {
  mobileNav.style.transform = "translate(-50%,200%)";
});
$("body").bind("swipedown", () => {
  mobileNav.style.transform = "translate(-50%,0%)";
});
