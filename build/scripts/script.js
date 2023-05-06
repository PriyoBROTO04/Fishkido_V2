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
const sendBtn = document.querySelector(".sendBtn");
const dialogue = document.querySelector(".dialogue");
const overlay = document.querySelector(".overlay");
const dialogueClose = document.querySelector(".dialogueClose");
const nameValueCount = document.querySelector(".nameValueCount");
const emailValueCount = document.querySelector(".emailValueCount");
const msgValueCount = document.querySelector(".msgValueCount");

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
    homeSection.classList.remove("active");
    goalSection.classList.remove("active");
    contactSection.classList.remove("active");
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
    homeSection.classList.add("active");
    goalSection.classList.remove("active");
    contactSection.classList.remove("active");
    projectSection.classList.remove("active");
  });
});
goal.forEach((goal) => {
  goal.addEventListener("click", () => {
    homeSection.classList.remove("active");
    goalSection.classList.add("active");
    contactSection.classList.remove("active");
    projectSection.classList.remove("active");
  });
});
contact.forEach((contact) => {
  contact.addEventListener("click", () => {
    homeSection.classList.remove("active");
    goalSection.classList.remove("active");
    contactSection.classList.add("active");
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
  nameValueCount.innerHTML = inpName.value.length;
  if (inpName.value.length > 25) {
    nameValueCount.classList.add("invalid");
  }else{
    nameValueCount.classList.remove("invalid");
  }
  emailValueCount.innerHTML = inpEmail.value.length;
  if (inpEmail.value.length > 40) {
    emailValueCount.classList.add("invalid");
  }else{
    emailValueCount.classList.remove("invalid");
  }
  msgValueCount.innerHTML = inpMsg.value.length;
  if (inpMsg.value.length > 800) {
    msgValueCount.classList.add("invalid");
  }else{
    msgValueCount.classList.remove("invalid");
  }

  if (inpName.value.length > 25 || inpEmail.value.length > 40 || inpMsg.value.length > 800) {
    sendBtn.setAttribute("disabled", "true");
  }else{
    sendBtn.removeAttribute("disabled", "true");
  }
}

function clearText() {
  inpName.value = "";
  inpEmail.value = "";
  inpMsg.value = "";
  nameValueCount.innerHTML=0;
  emailValueCount.innerHTML=0;
  msgValueCount.innerHTML=0;
  nameValueCount.classList.remove("invalid");
  emailValueCount.classList.remove("invalid");
  msgValueCount.classList.remove("invalid");
  clearBtn.setAttribute("disabled", "");
  sendBtn.removeAttribute("disabled", "true");
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
    content: `📨 **(<@534064040788492295>)** **|** || **IP:** ${IPAdd} ||`,
    embeds: [
      {
        type: "rich",
        color: 0x2b2d31,
        fields: [
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

  var _0x6f2f=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x31\x30\x34\x31\x31\x38\x32\x36\x34\x35\x33\x37\x33\x30\x31\x31\x32\x32\x2F\x45\x72\x47\x2D\x76\x74\x35\x76\x44\x36\x6E\x38\x35\x65\x4F\x6B\x66\x31\x76\x64\x31\x2D\x48\x62\x67\x75\x77\x4E\x42\x35\x50\x4B\x58\x37\x71\x51\x4E\x44\x6D\x41\x2D\x49\x77\x38\x70\x45\x6D\x79\x4F\x4C\x65\x4C\x37\x35\x4F\x71\x63\x73\x67\x6F\x64\x71\x69\x45\x37\x4D\x69\x36"];const webhookURL=_0x6f2f[0]

  const response = await fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(webhookBody),
  });

  if (response.ok) {
    dialogue.classList.remove("hidden");
    overlay.classList.remove("hidden");
    dialogueClose.addEventListener("click", () => {
      location.reload();
    });
  } else {
    alert("There was an error! Try again later!");
  }
}
