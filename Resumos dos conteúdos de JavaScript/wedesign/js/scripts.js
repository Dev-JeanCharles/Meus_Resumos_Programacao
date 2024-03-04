
// Menu Mobile

document.getElementById("hamburguer-icon").onclick = function() {
  
  document.getElementById("sliding-header-menu-outer").style.right = "0";
};

document.getElementById('sliding-header-menu-close-button').onclick = function () {

  document.getElementById('sliding-header-menu-outer').style.right = "-320px";
};


// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var seletected_color = "#2A2D34";

var about_tags = document.getElementsByClassName('single-tab')


for(var cont = 0; cont < about_tags.length; cont++) {

  about_tags[cont].onclick = function (){
    
    for(var cont2 = 0; cont2 < about_tags.length; cont2++) {

      about_tags[cont2].style['background-color'] = unselected_color;
      this.style['font-weight'] = 'bold';
    }

    this.style['background-color'] = seletected_color;
    this.style['font-weight'] = 'bold';
    
    var selecionado = this.innerHTML;

    document.getElementById('box-text').innerHTML = aboutUs[selecionado]

  };
}
// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

// service-previous
// service-next
// service-title
// service-text

var servicoAtual = 0;
document.getElementById('service-previous').onclick = function () {
  if (servicoAtual == 0) {
    var servicoAnterior = our_services.length -1;
  } else {
    var servicoAnterior = servicoAtual -1;
  }

  document.getElementById('service-title').innerHTML = our_services[servicoAnterior].title
  document.getElementById('service-text').innerHTML = our_services[servicoAnterior].text
  servicoAtual = servicoAnterior;
}

document.getElementById('service-next').onclick = function () {
  if (servicoAtual == our_services.length -1) {
    var servicoSeguinte = 0;
  } else {
    var servicoSeguinte = servicoAtual + 1;
  }

  document.getElementById('service-title').innerHTML = our_services[servicoSeguinte].title
  document.getElementById('service-text').innerHTML = our_services[servicoSeguinte].text
  servicoAtual = servicoSeguinte;
}

// Data Footer

// current_year

var anoAtual = new Date;
anoAtual = anoAtual.getFullYear();
console.log(anoAtual)

document.getElementById('current_year').innerHTML = anoAtual

import Map from 'ol/Map.js';

const map = new Map({target: 'map'});

