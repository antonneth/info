
// menu interaction



const x = document.querySelector("#x") 
const lacosaesa = document.querySelector(".la-cosa-esa-xd")
const lacosaesamov = document.querySelector(".la-cosa-esa-xd-mov")
const btnmenux = document.querySelector("#x-menu-mov")
const todomov = document.querySelector(".todo-mov")
const menus = document.querySelector(".menu")
const btnmenu = document.querySelector(".btn_menu")
const homejs = document.querySelector("#home-js")
const galleryjs = document.querySelector("#gallery-js")
const roadmapjs = document.querySelector("#roadmap-js")
const thegaragejs = document.querySelector("#thegarage-js")
const shopjs =  document.querySelector("#shop-js")
const logojs =  document.querySelector("#logo-mov")
const xmov = document.querySelector("#x-mov")
const twitterbut = document.querySelector("#twitter")
const discordbut = document.querySelector("#discord")
const instabut = document.querySelector("#instalol")
const logo = document.querySelector(".logo")
const enter = document.querySelector("#discenter") 

lacosaesa.remove()
lacosaesamov.remove()
 

xmov.addEventListener("click", (e)=>{
    lacosaesa.remove()
    lacosaesamov.remove()
});

btnmenu.addEventListener("click", (e)=>{
    todomov.style.visibility = "visible"
    menus.style.visibility = "hidden"
    lacosaesa.style.visibility = "visible"
});

btnmenux.addEventListener("click", (e)=>{
    todomov.style.visibility = "hidden"
    menus.style.visibility = "visible"
})

homejs.addEventListener("click",(e)=>{
    window.open("https://www.youtube.com","_self")

});

homejs.addEventListener("mouseover",(e)=>{
    homejs.style.cursor = "pointer"
});

galleryjs.addEventListener("click",(e)=>{
    window.open("https://www.youtube.com","_self")

});

galleryjs.addEventListener("mouseover",(e)=>{
    galleryjs.style.cursor = "pointer"
});


roadmapjs.addEventListener("click",(e)=>{
    window.open("https://www.youtube.com","_self")

});

roadmapjs.addEventListener("mouseover",(e)=>{
    roadmapjs.style.cursor = "pointer"
});


thegaragejs.addEventListener("click",(e)=>{
    window.open("https://www.youtube.com","_self")

});

thegaragejs.addEventListener("mouseover",(e)=>{
    thegaragejs.style.cursor = "pointer"
});


twitterbut.addEventListener("click",(e)=>{
    window.open("https://www.google.com/","_self")

});

twitterbut.addEventListener("mouseover",(e)=>{
    twitterbut.style.cursor = "pointer"
});

instabut.addEventListener("click",(e)=>{
    window.open("https://www.google.com/","_self")

});

instabut.addEventListener("mouseover",(e)=>{
    instabut.style.cursor = "pointer"
});

discordbut.addEventListener("click",(e)=>{
    window.open("https://www.google.com/","_self")

});

discordbut.addEventListener("mouseover",(e)=>{
    discordbut.style.cursor = "pointer"
});

logo.addEventListener("click",(e)=>{
    window.open("https://www.google.com/","_self")

});

logo.addEventListener("mouseover",(e)=>{
    logo.style.cursor = "pointer"
});

logojs.addEventListener("click",(e)=>{
    window.open("https://www.google.com/","_self")

});

logojs.addEventListener("mouseover",(e)=>{
    logojs.style.cursor = "pointer"
});




enter.addEventListener("click",(e)=>{
    window.open("https://discord.com/invite/e2w3txPWrc","_self")
});

// metamask

const ethereumButton = document.querySelector(".btnXD")


const isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};
    

function removerCaracter(texto, posicionCaracter) {
  if(texto.length) {
    if (posicionCaracter >= 0 && posicionCaracter < texto.length) {
      let parte1 = texto.substring(0, posicionCaracter);
      let parte2 = texto.substring(posicionCaracter + 41, texto.length);
      return parte1 + parte2
    } else
    return texto
  } else {
  return texto;
  }
}




async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' }).catch((err)=>
    console.log(err.code));
    const arr = accounts;
    let texto = arr.toString();

    let billetera =(removerCaracter(texto, 5));
    const si = billetera + "..."
    ethereumButton.innerHTML = si
    ethereumButton2.innerHTML = si
  }

ethereumButton.addEventListener('click', (e) => {
    
  if(isMetaMaskInstalled() == true) {
      getAccount()
    };
    if(isMetaMaskInstalled() == false) {
      window.open("https://metamask.io", "_self")
    }

  });

  const ethereumButton2 = document.querySelector(".btnmenu")

  ethereumButton2.addEventListener('click', (e) => {
    
    if(isMetaMaskInstalled() == true) {
        getAccount()
      };
      if(isMetaMaskInstalled() == false) {
        window.open("https://metamask.io", "_self")
      }
  
    });



    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");
    
    root.style.setProperty("--marquee-elements", marqueeContent.children.length);
    
    for(let i=0; i<marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }


    const toggles = document.querySelectorAll('.faq-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.parentNode.classList.toggle('active');
        });
    });
    
    