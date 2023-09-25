let button = document.querySelector(`#resolver-conta`);
let response = document.querySelector(`#resultado`);

button.addEventListener("click", () => {
  function mensagemdeErro(erro) {
    let aviso = document.getElementById(`erro`);
    if (aviso) {
      aviso.innerHTML = erro;
    }
  }

  function exibirResultado(resultado) {
    let resposta = document.getElementById(`resultado`);
    if (resposta) {
      resposta.innerHTML = resultado;
    }
  }

  let valordeA = document.querySelector(`#valordeA`).value;
  valordeA = valordeA.replace(",", ".").replace(/\s/g, "");

  let valordeB = document.querySelector(`#valordeB`).value;
  valordeB = valordeB.replace(",", ".").replace(/\s/g, "");

  let valordeC = document.querySelector(`#valordeC`).value;
  valordeC = valordeC.replace(",", ".").replace(/\s/g, "");

  function verificarValores(valordeA, valordeB, valordeC) {
    const caracteresPermitidos = /^-?(?!0(\.0+)?$)\d+(\.\d+)?$/;

    if (
      !caracteresPermitidos.test(valordeA) ||
      !caracteresPermitidos.test(valordeB) ||
      !caracteresPermitidos.test(valordeC)
    ) {
      let erro = `Por favor, preencha corretamente os campos abaixo`;
      mensagemdeErro(erro);
      let resposta = document.getElementById("resultado");
      resposta.innerHTML = "";
      response.style.backgroundImage = "url('background.png')";
      return false;
    } else {
      let aviso = document.getElementById("erro");
      aviso.innerHTML = "";
      response.style.backgroundImage = "none";
      return true;
    }
  }

  function Bhaskara(valordeA, valordeB, valordeC) {
    let delta = Math.pow(valordeB, 2) - 4 * valordeA * valordeC;

    const verificarTamanhoDelta = delta.toString().length;

    if (verificarTamanhoDelta > 7) {
      delta = delta.toFixed(5).slice(0, 7);
    }

    let x1 = (-valordeB + Math.sqrt(delta)) / (2 * valordeA);
    let x2 = (-valordeB - Math.sqrt(delta)) / (2 * valordeA);

    const verificarTamanhoX1 = x1.toString().length;
    const verificarTamanhoX2 = x2.toString().length;

    if (verificarTamanhoX1 > 7 && verificarTamanhoX2 > 7) {
      x1 = x1.toFixed(5).slice(0, 7);
      x2 = x2.toFixed(5).slice(0, 7);
    } else if (verificarTamanhoX1 > 7) {
      x1 = x1.toFixed(5).slice(0, 7);
    } else if (verificarTamanhoX2 > 7) {
      x2 = x2.toFixed(5).slice(0, 7);
    }

    let raizQuadrada = Math.sqrt(delta);
    const doisVezesA = 2 * valordeA;
    const raizPositiva = Math.sqrt(delta * -1);
    const eliminarParenteses = -1 * valordeB;

    const verificarTamanhoRaiz = raizQuadrada.toString().length;

    if (verificarTamanhoRaiz > 7) {
      raizQuadrada = raizQuadrada.toFixed(5);
    }

    const tamanhoEliminarParenteses = eliminarParenteses.toString().length;
    const tamanhoDuasVezesA = doisVezesA.toString().length;

    let espacos = "";
    let espacos2 = "";
    let espacos3 = "";

    const comprimentox1ex2 = 5 + tamanhoEliminarParenteses + 3 + verificarTamanhoDelta - parseInt(tamanhoDuasVezesA);
    const comprimentox1emx = 6 + tamanhoEliminarParenteses + 3 + verificarTamanhoDelta - parseInt(tamanhoDuasVezesA);
    const comprimentox2emx = comprimentox1ex2 + Math.floor(comprimentox1emx / 2) - parseInt(tamanhoDuasVezesA);

    for (let i = 0; i < comprimentox1ex2; i++) {
      espacos += "&nbsp;";
    }

    for (let i = 0; i < comprimentox1emx; i++) {
      espacos2 += "&nbsp;";
    }

    for (let i = 0; i < comprimentox2emx; i++) {
      espacos3 += "&nbsp;";
    }

    function DeltaPositivoRaizExata() {
      const parteDelta = `<span class="DeltaPositivoRaizExata" style="color: rgb(3, 242, 255);">Δ = ${delta}</span><br>`;
      const parteRaizSoma = `<br><span class="DeltaPositivoRaizExata" style="color: rgb(3, 255, 24);">x¹ = ${x1}</span><br>`;
      const parteRaizSubtracao = `<br><span class="DeltaPositivoRaizExata" style="color: rgb(255, 158, 242);">x² = ${x2}</span><br>`;
      const parteRaizesFinais = `<br><span class="DeltaPositivoRaizExata" style="color: yellow;">x = {${x1}, ${x2}}</span>`;

      const resultado = parteDelta + parteRaizSoma + parteRaizSubtracao + parteRaizesFinais;
      exibirResultado(resultado);
    }

    function DeltaNulo() {
      const parteDelta = `<span class="DeltaNulo" style="color: rgb(3, 242, 255);">Δ = ${delta}</span><br>`;
      const parteRaiz = `<br><span class="DeltaNulo" style="color: rgb(3, 255, 24);">x = ${x1}</span><br>`;
      const parteRaizFinal = `<br><span class="DeltaNulo" style="color: rgb(255, 158, 242);">x = { ${x1} }</span><br>`;

      const resultado = parteDelta + parteRaiz + parteRaizFinal;
      exibirResultado(resultado);
    }

    function DeltaNegativoeRaizInteger() {
      const parteDelta = `<span class="DeltaNegativoeRaizInteger" style="color: rgb(3, 255, 24); border: 1px solid; padding: 0.2rem 1rem;">Δ = ${delta}</span><br>`;

      const x1Iguala = `<span>x¹ = </span>`;
      const parteSuperior1 = `<span style="text-decoration: underline;">${eliminarParenteses} + ${raizPositiva}i</span><br>`;
      const parteInferior1 = `<span">${espacos} ${doisVezesA}</span>`;
      const parteRaizSoma = x1Iguala + parteSuperior1 + parteInferior1;
      const x1Final = `<br><span class="DeltaNegativoeRaizInteger" style="color: rgb(3, 242, 255);">${parteRaizSoma}</span><br>`;

      const x2Iguala = `<span>x² = </span>`;
      const parteSuperior2 = `<span style="text-decoration: underline;">${eliminarParenteses} - ${raizPositiva}i</span><br>`;
      const parteInferior2 = `<span>${espacos} ${doisVezesA}</span>`;
      const parteRaizSubtracao = x2Iguala + parteSuperior2 + parteInferior2;
      const x2Final = `<br><span class="DeltaNegativoeRaizInteger" style="color: rgb(255, 158, 242);">${parteRaizSubtracao}</span><br>`;

      const xIguala = `x = {(`;
      const parteSuperior3 = `${eliminarParenteses} + ${raizPositiva}i`;
      const fechamentoeAbertura = `), (`;
      const parteSuperior4 = `${eliminarParenteses} - ${raizPositiva}i`;
      const fechamentoFinal = `)}<br>`;
      const parteInferior3 = `${espacos2} ${doisVezesA} ${espacos} ${doisVezesA}`;

      const parteSuperior3Estilizada = `<span style="text-decoration: underline;">${parteSuperior3}</span>`;
      const parteSuperior4Estilizada = `<span style="text-decoration: underline;">${parteSuperior4}</span>`;

      const parteRaizesFinais =
        xIguala +
        parteSuperior3Estilizada +
        fechamentoeAbertura +
        parteSuperior4Estilizada +
        fechamentoFinal +
        parteInferior3;
      const x1ex2Final = `<br><span class="DeltaNegativoeRaizInteger" style="color: yellow;">${parteRaizesFinais}</span>`;

      const resultado = parteDelta + x1Final + x2Final + x1ex2Final;
      exibirResultado(resultado);
    }

    function DeltaNegativoeRaizFloat() {
      const parteDelta = `<span class="DeltaNegativoeRaizFloat" style="color: rgb(3, 255, 24); border: 1px solid; padding: 0.2rem 1rem;">Δ = ${delta}</span><br>`;

      const x1Iguala = `<span>x¹ = </span>`;
      const parteSuperior1 = `<span style="text-decoration: underline;">${eliminarParenteses} + i√${delta * -1}</span><br>`;
      const parteInferior1 = `<span">${espacos} ${doisVezesA}</span>`;
      const parteRaizSoma = x1Iguala + parteSuperior1 + parteInferior1;
      const x1Final = `<br><span class="DeltaNegativoeRaizFloat" style="color: rgb(3, 242, 255);">${parteRaizSoma}</span><br>`;

      const x2Iguala = `<span>x² = </span>`;
      const parteSuperior2 = `<span style="text-decoration: underline;">${eliminarParenteses} - i√${delta * -1}</span><br>`;
      const parteInferior2 = `<span>${espacos} ${doisVezesA}</span>`;
      const parteRaizSubtracao = x2Iguala + parteSuperior2 + parteInferior2;
      const x2Final = `<br><span class="DeltaNegativoeRaizFloat" style="color: rgb(255, 158, 242);">${parteRaizSubtracao}</span><br>`;

      const xIguala = `x = {(`;
      const parteSuperior3 = `${eliminarParenteses} + i√${delta * -1}`;
      const fechamentoeAbertura = `), (`;
      const parteSuperior4 = `${eliminarParenteses} - i√${delta * -1}`;
      const fechamentoFinal = `)}<br>`;
      const parteInferior3 = `${espacos2}${doisVezesA}${espacos3}${doisVezesA}`;

      const parteSuperior3Estilizada = `<span style="text-decoration: underline;">${parteSuperior3}</span>`;
      const parteSuperior4Estilizada = `<span style="text-decoration: underline;">${parteSuperior4}</span>`;

      const parteRaizesFinais =
        xIguala +
        parteSuperior3Estilizada +
        fechamentoeAbertura +
        parteSuperior4Estilizada +
        fechamentoFinal +
        parteInferior3;
      const x1ex2Final = `<br><span class="DeltaNegativoeRaizFloat" style="color: yellow;">${parteRaizesFinais}</span>`;

      const resultado = parteDelta + x1Final + x2Final + x1ex2Final;
      exibirResultado(resultado);
    }

    function DeltaPositivoRaizInexata() {
      espacos += "&nbsp;";
      espacos2 += "&nbsp;";
      espacos3 += "&nbsp;";

      const resultadoExato = `<span class="texto-DeltaPositivoRaizInexata" style="color: gainsboro;">Para um resultado exato:</span><br>`;

      const parteDelta = `<span class="DeltaPositivoRaizInexata" style="color: rgb(3, 255, 24); border: 1px solid; padding: 0.2rem 1rem;">Δ = ${delta}</span><br>`;

      const x1Iguala = `<span>x¹ = </span>`;
      const parteSuperior1 = `<span style="text-decoration: underline;">${eliminarParenteses} + √${delta}</span><br>`;
      const parteInferior1 = `<span">${espacos} ${doisVezesA}</span>`;
      const parteRaizSoma = x1Iguala + parteSuperior1 + parteInferior1;
      const x1Final = `<span class="DeltaPositivoRaizInexata" style="color: rgb(3, 242, 255);">${parteRaizSoma}</span><br>`;

      const x2Iguala = `<span>x² = </span>`;
      const parteSuperior2 = `<span style="text-decoration: underline;">${eliminarParenteses} - √${delta}</span><br>`;
      const parteInferior2 = `<span>${espacos} ${doisVezesA}</span>`;
      const parteRaizSubtracao = x2Iguala + parteSuperior2 + parteInferior2;
      const x2Final = `<span class="DeltaPositivoRaizInexata" style="color: rgb(255, 158, 242);">${parteRaizSubtracao}</span><br>`;

      const xIguala = `x = {(`;
      const parteSuperior3 = `${eliminarParenteses} + √${delta}`;
      const fechamentoeAbertura = `), (`;
      const parteSuperior4 = `${eliminarParenteses} - √${delta}`;
      const fechamentoFinal = `)}<br>`;
      const parteInferior3 = `${espacos2} ${doisVezesA}${espacos3}${doisVezesA}`;

      const parteSuperior3Estilizada = `<span style="text-decoration: underline;">${parteSuperior3}</span>`;
      const parteSuperior4Estilizada = `<span style="text-decoration: underline;">${parteSuperior4}</span>`;

      const parteRaizesFinais =
        xIguala +
        parteSuperior3Estilizada +
        fechamentoeAbertura +
        parteSuperior4Estilizada +
        fechamentoFinal +
        parteInferior3;
      const x1ex2Final = `<span class="DeltaPositivoRaizInexata" style="color: yellow;">${parteRaizesFinais}</span>`;

      const parteUm =
        resultadoExato + parteDelta + x1Final + x2Final + x1ex2Final;

      const resultadoInexato = `<br><span class="texto-DeltaPositivoRaizInexata" style="color: gainsboro;">Para um resultado aproximado:</span><br>`;

      const parteDeltaInexato = `<span class="DeltaPositivoRaizInexata" style="color: rgb(3, 242, 255); border: 1px solid; padding: 0.2rem 1rem;">Δ = ${delta}</span><br>`;
      const parteRaizSomaInexato = `<span class="DeltaPositivoRaizInexata" style="color: rgb(255, 158, 242);">x¹ = ${x1}</span><br>`;
      const parteRaizSubtracaoInexato = `<span class="DeltaPositivoRaizInexata" style="color: rgb(3, 255, 24);">x² = ${x2}</span><br>`;
      const parteRaizesFinaisInexato = `<span class="DeltaPositivoRaizInexata" style="color: rgb(255, 140, 0);">x = {${x1}, ${x2}}</span>`;

      const parteDois =
        resultadoInexato +
        parteDeltaInexato +
        parteRaizSomaInexato +
        parteRaizSubtracaoInexato +
        parteRaizesFinaisInexato;

      const resultado = parteUm + parteDois;
      exibirResultado(resultado);
    }

    if (delta < 0 && Number.isInteger(raizPositiva)) {
      DeltaNegativoeRaizInteger(delta, eliminarParenteses, raizPositiva, doisVezesA);
    } else if (delta < 0 && !Number.isInteger(raizPositiva)) {
      DeltaNegativoeRaizFloat(delta, eliminarParenteses, doisVezesA);
    } else if (delta > 0 && !Number.isInteger(raizQuadrada)) {
      DeltaPositivoRaizInexata(delta, eliminarParenteses, doisVezesA, x1, x2);
    } else if (delta === 0) {
      DeltaNulo(delta, x1);
    } else {
      DeltaPositivoRaizExata(delta, x1, x2);
    }
  }

  if (verificarValores(valordeA, valordeB, valordeC)) {
    Bhaskara(valordeA, valordeB, valordeC);
  }
});
