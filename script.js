// Alternar tema claro/escuro
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Salvar preferência no localStorage
  if (html.classList.contains("light")) {
    localStorage.setItem("theme", "light")
  } else {
    localStorage.setItem("theme", "dark")
  }
}

// MENU DE IDIOMAS
function toggleLangDropdown() {
  const menu = document.getElementById("lang-menu")
  menu.style.display = menu.style.display === "block" ? "none" : "block"
}

function selectLanguage(lang) {
  const label = document.getElementById("current-lang")
  const flag = document.querySelector(".dropbtn img")

  // Atualiza bandeira e texto
  const langs = {
    "pt-BR": ["PT-BR", "br", "PT"],
    "en-US": ["EN-US", "us", "EN"],
    "es-ES": ["ES-ES", "es", "ES"],
    "fr-FR": ["FR-FR", "fr", "FR"],
    "zh-CN": ["ZH-CN", "cn", "ZH"],
    "hi-IN": ["HI-IN", "in", "HI"],
    "ru-RU": ["RU-RU", "ru", "RU"],
  }

  if (langs[lang]) {
    label.textContent = langs[lang][0]
    flag.src = `https://flagcdn.com/w20/${langs[lang][1]}.png`
    flag.alt = langs[lang][2]
  }

  // Atualiza os textos
  updateTexts(lang)

  // Fecha o menu
  document.getElementById("lang-menu").style.display = "none"

  // Salva idioma
  localStorage.setItem("selectedLang", lang)
}

// Fechar dropdown ao clicar fora
window.addEventListener("click", function (e) {
  const button = document.querySelector(".dropbtn")
  const menu = document.getElementById("lang-menu")
  
  if (!button.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none"
  }
})

// TEXTOS em diferentes idiomas
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

// Aplicar os textos traduzidos
function updateTexts(lang) {
  const t = translations[lang]
  if (!t) return

  document.getElementById("link-portfolio").textContent = t.portfolio
  document.getElementById("link-certificates").textContent = t.certificates
  document.querySelector("footer").textContent = t.footer
}

// Ao carregar a página, aplica tema e idioma salvos
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "light") {
    document.documentElement.classList.add("light")
  } else {
    document.documentElement.classList.remove("light")
  }

  const savedLang = localStorage.getItem("selectedLang") || "pt-BR"
  selectLanguage(savedLang)
})
