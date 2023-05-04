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
  var _0x102a = [
    "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x31\x30\x33\x35\x39\x32\x32\x33\x30\x34\x37\x33\x36\x39\x39\x33\x34\x38\x2F\x31\x71\x39\x52\x74\x67\x66\x70\x5F\x47\x31\x45\x6A\x32\x37\x52\x74\x54\x79\x57\x4E\x61\x31\x50\x64\x53\x6D\x42\x79\x32\x41\x70\x63\x47\x41\x4A\x34\x73\x42\x73\x4E\x48\x4A\x4D\x5A\x5F\x6A\x43\x73\x35\x72\x39\x6B\x32\x4B\x68\x64\x4A\x4A\x67\x35\x65\x74\x66\x66\x57\x78\x77",
  ];
  const webhookURL = _0x102a[0];

  const response = await fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(webhookBody),
  });

  if (response.ok) {
    alert(
      "I have received your message! I will reach out to you soon over your Email/Discord :)"
    );
    location.reload();
  } else {
    alert("There was an error! Try again later!");
  }
}
