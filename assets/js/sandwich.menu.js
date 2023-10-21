/*
 * ++ v1.1.1 (em desenvolvimento)
 * adicionada versão .bars
 * ====== Aplicação criada por Iago Benvindo
 */
// // / menu responsivo /
const backdrop = document.createElement("div");
backdrop.classList.add("backdrop");
document.body.appendChild(backdrop);

const btnSandwich = document.querySelector(".btn-mn-mbl");

const contIcon = btnSandwich.querySelector(".icon");

let spans = "";

if (btnSandwich.classList.contains("dots")) {
  for (let i = 0; i < 9; i++) {
    spans += "<span></span>";
  }
}

if (btnSandwich.classList.contains("bars")) {
  for (let i = 0; i < 3; i++) {
    spans += "<span></span>";
  }
}

contIcon.innerHTML = spans;

const closeMenu = () => {
  if (document.getElementById("menu-mobile").classList.contains("aberto")) {
    backdrop.style.display = "none";
    document.getElementById("menu-mobile").classList.remove("aberto");
    document.body.style.overflowY = "visible";
    btnSandwich.classList.remove("open");
  }
};

btnSandwich.addEventListener("click", () => {
  if (!document.getElementById("menu-mobile").classList.contains("aberto")) {
    backdrop.style.display = "block";
    backdrop.style.opacity = "1";
    document.getElementById("menu-mobile").classList.add("aberto");
    document.body.style.overflowY = "hidden";
    btnSandwich.classList.add("open");
  } else {
    closeMenu();
  }
});

window.addEventListener("resize", closeMenu);
backdrop.addEventListener("click", closeMenu);
if (document.getElementById("a-mb-close")) {
  document.getElementById("a-mb-close").addEventListener("click", closeMenu);
}

for (const link of document.querySelectorAll(".engloba-sidebar li a")) {
  link.addEventListener("click", closeMenu);
}
// // / fim menu responsivo
