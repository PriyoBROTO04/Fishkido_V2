const navIndicator = document.querySelector(".navIndicator");
const navItems = document.querySelectorAll(".navItems");
const mobileNav = document.querySelector(".mobileNav");
const home = document.querySelectorAll(".home");
const project = document.querySelectorAll(".project");
const cards = document.querySelectorAll(".card");
const card1 = document.querySelector(".card1");
const goal = document.querySelectorAll(".goal");
const contact = document.querySelectorAll(".contact");
const homeSection = document.querySelector(".homeSection");
const projectSection = document.querySelector(".projectSection");
const goalSection = document.querySelector(".goalSection");
const contactSection = document.querySelector(".contactSection");
const inpName = document.querySelector("#inpName");
const inpEmail = document.querySelector("#inpEmail");
const inpMsg = document.querySelector("#inpMsg");
const clearBtn = document.querySelector(".clearBtn");
const dialogue = document.querySelector(".dialogue");
const overlay = document.querySelector(".overlay");
const dialogueClose = document.querySelector(".dialogueClose");

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
    homeSection.classList.remove('active');
    goalSection.classList.remove('active');
    contactSection.classList.remove('active');
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
    homeSection.classList.add('active');
    goalSection.classList.remove('active');
    contactSection.classList.remove('active');
    projectSection.classList.remove("active");
  });
});
goal.forEach((goal) => {
  goal.addEventListener("click", () => {
    homeSection.classList.remove('active');
    goalSection.classList.add('active');
    contactSection.classList.remove('active');
    projectSection.classList.remove("active");
  });
});
contact.forEach((contact) => {
  contact.addEventListener("click", () => {
    homeSection.classList.remove('active');
    goalSection.classList.remove('active');
    contactSection.classList.add('active');
    projectSection.classList.remove("active");
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

async function sendContact(e) {
  e.preventDefault();
  const IPAdd = await fetch("https://api.ipify.org/?format=json")
    .then((response) => response.json())
    .then((data) => {
      return data.ip;
    });
  const name = inpName.value;
  const email = inpEmail.value;
  const msg = inpMsg.value;

  const webhookBody = {
    content: `hey <@534064040788492295>! You got a new message`,
    embeds: [
      {
        type: "rich",
        title: `Contact Form Submitted`,
        description: "",
        color: 0x2b2d31,
        fields: [
          {
            name: `IP Address`,
            value: `\`\`\`${IPAdd}\`\`\``,
          },
          {
            name: `Name`,
            value: `\`\`\`${name}\`\`\``,
          },
          {
            name: `Email`,
            value: `\`\`\`${email}\`\`\``,
          },
          {
            name: `Message`,
            value: `\`\`\`${msg}\`\`\``,
          },
        ],
        timestamp: new Date().toISOString(),
      },
    ],
  };

  const webhookURL="https://discord.com/api/webhooks/1103677235103273022/H3eT6mjI_qXFFGX7cjiBdaI1Z_h-PMyJn2mvqk7NiodzKiAvzMkYltjXu9JkEByiD76i";

  const response = await fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(webhookBody),
  });

  if (response.ok) {
    dialogue.classList.remove('hidden');
    overlay.classList.remove('hidden');
    dialogueClose.addEventListener('click',()=>{
      location.reload();
    })
  } else {
    alert("There was an error! Try again later!");
  }
}
