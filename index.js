// Vytvořte si repozitář ze šablony cviceni-novinky. V repozitáři je připravena webová stránka, která zobrazuje několik zajímavých zpráv. Zobrazte stránku v prohlížeči a veškeré úkoly z tohoto cvičení proveďte v JavaScriptovém souboru index.js.

// Pomocí document.querySelector vyberte element body a uložte si jej do proměnné bodyElement. Pomocí této proměnné nastavte barvu pozadí elementu na hodnotu #e9e9e9.
// Do jiné proměnné vyberte element s třídou news a nastavte mu barvu pozadí na bílou a maximální šířku na 60rem.
// Vyberte element h1 a nastavte mu (v JavaScriptu) třídu na news__title. Nadpis by měl změnit styl. Nastavte také obsah nadpisu na text Aktuální novinky.
// Pomocí atributu id vyberte element obsahující první zprávu. Přidejte do jeho atributu class třídu post--main. První zpráva by tak měla mírně změnit svůj styl.
// Vyberte obrázek v poslední zprávě (tu vyberte podle id) a změnte jeho atribut src na obrázek images/zprava3-novy.jpg.
// Na konci by stránka v prohlížeči měla vypadat jako na obrázku níže:

const bodyElement = document.querySelector("body")
bodyElement.style.backgroundColor = "#e9e9e9"


const newsElement = document.querySelector(".news")
newsElement.style.backgroundColor = "white"
newsElement.style.maxWidth = "60rem"

const h1Element = document.querySelector("h1")
h1Element.classList.add('news__title')
h1Element.textContent = "Aktuální novinky"

const zprava1Element = document.querySelector("#zprava1")
zprava1Element.classList.add("post--main")

const picture3Element = document.querySelector("#zprava3 .post__picture")
picture3Element.src = 'images/zprava3-novy.jpg'

