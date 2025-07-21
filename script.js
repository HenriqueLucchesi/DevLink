// MODO CLARO / ESCURO
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  // Substituir a imagem (aqui você pode colocar outra imagem caso queira para light mode)
  img.setAttribute("src", "eu/eu.png")
}

// MENU DE IDIOMAS
function toggleLangDropdown() {
  const menu = document.getElementById("lang-menu")
  menu.style.display = menu.style.display === "block" ? "none" : "block"
}

function selectLanguage(lang) {
  const label = document.getElementById("current-lang")
  const flag = document.querySelector(".dropbtn img")

  if (lang === "pt-BR") {
    label.textContent = "PT-BR"
    flag.src = "https://flagcdn.com/w20/br.png"
    flag.alt = "PT"
  } else if (lang === "en-US") {
    label.textContent = "EN-US"
    flag.src = "https://flagcdn.com/w20/us.png"
    flag.alt = "EN"
  } else if (lang === "es-ES") {
    label.textContent = "ES-ES"
    flag.src = "https://flagcdn.com/w20/es.png"
    flag.alt = "ES"
  } else if (lang === "fr-FR") {
    label.textContent = "FR-FR"
    flag.src = "https://flagcdn.com/w20/fr.png"
    flag.alt = "FR"
  } else if (lang === "zh-CN") {
    label.textContent = "ZH-CN"
    flag.src = "https://flagcdn.com/w20/cn.png"
    flag.alt = "ZH"
  } else if (lang === "hi-IN") {
    label.textContent = "HI-IN"
    flag.src = "https://flagcdn.com/w20/in.png"
    flag.alt = "HI"
  } else if (lang === "ru-RU") {
    label.textContent = "RU-RU"
    flag.src = "https://flagcdn.com/w20/ru.png"
    flag.alt = "RU"
  }
  
  // Atualizar textos da página
  updateTexts(lang)

  // Fechar menu
  document.getElementById("lang-menu").style.display = "none"

  // Salvar idioma selecionado
  localStorage.setItem("selectedLang", lang)
}

// FECHAR DROPDOWN AO CLICAR FORA
window.addEventListener("click", function (e) {
  const dropdown = document.querySelector(".dropdown")
  if (!dropdown.contains(e.target)) {
    document.getElementById("lang-menu").style.display = "none"
  }
})

// TEXTOS EM DIFERENTES IDIOMAS
const translations = {
  "pt-BR": {
    portfolio: "Ver meu portfólio",
    certificates: "Meus Certificados",
    footer: "Feito por Henrique Lucchesi Oliveira",
  },
  "en-US": {
    portfolio: "View my portfolio",
    certificates: "My certificates",
    footer: "Made by Henrique Lucchesi Oliveira",
  },
  "es-ES": {
    portfolio: "Ver mi portafolio",
    certificates: "Mis certificados",
    footer: "Hecho por Henrique Lucchesi Oliveira",
  },
  "fr-FR": {
    portfolio: "Voir mon portfolio",
    certificates: "Mes certificats",
    footer: "Réalisé par Henrique Lucchesi Oliveira",
  },
  "zh-CN": {
    portfolio: "查看我的作品集",
    certificates: "我的证书",
    footer: "由 Henrique Lucchesi Oliveira 制作",
  },
  "hi-IN": {
    portfolio: "मेरा पोर्टफोलियो देखें",
    certificates: "मेरे प्रमाणपत्र",
    footer: "Henrique Lucchesi Oliveira द्वारा निर्मित",
  },
  "ru-RU": {
    portfolio: "Посмотреть мое портфолио",
    certificates: "Мои сертификаты",
    footer: "Сделано Henrique Lucchesi Oliveira",
  },
}

function updateTexts(lang) {
  const t = translations[lang]
  if (!t) return

  document.getElementById("link-portfolio").textContent = t.portfolio
  document.getElementById("link-certificates").textContent = t.certificates
  document.querySelector("footer").textContent = t.footer
}

// APLICAR IDIOMA SALVO AUTOMATICAMENTE AO CARREGAR
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang") || "pt-BR"
  selectLanguage(savedLang)
})
