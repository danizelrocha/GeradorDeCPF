const cpfEl = document.getElementById("cpf");
const gerarCpfBtn = document.getElementById("gerar-cpf");
const copiarCpfBtn = document.getElementById("copiar-cpf");

// Função para gerar CPF aleatório
function gerarCPF() {
  let n = Math.floor(Math.random() * 999999999) + 1;
  let nStr = n.toString().padStart(9, "0");
  let dv1 = calcularDV(nStr, 10);
  let dv2 = calcularDV(nStr + dv1, 11);

  cpfEl.innerText = formatarCPF(nStr + dv1 + dv2);
}

function calcularDV(numero, peso) {
  let total = 0;
  for (let i = 0; i < numero.length; i++) {
    total += parseInt(numero.charAt(i)) * peso--;
  }
  let resto = total % 11;
  return resto < 2 ? 0 : 11 - resto;
}

// Função que organiza e formata como vai ser exibi o CPF
function formatarCPF(cpf) {
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/; // Dividindo a string do cpf 
  return cpf.replace(cpfRegex, "$1.$2.$3-$4"); // como vai ficar o conjunto do cpf 999.999.999-99 
}

// Função para copiar CPF para área de transferência
function copiarCPF() {
  const cpf = cpfEl.innerText;
  navigator.clipboard.writeText(cpf).then(
    () => {
      alert(`CPF ${cpf} copiado para a área de transferência!`);
    },
    (err) => {
      console.error("Erro ao copiar CPF: ", err);
    }
  );
}

// Obtém a referência para o elemento de âncora pelo ID
var link = document.getElementById("validador");

// Define o atributo href com o link desejado
link.href = "https://www.4devs.com.br/validador_cpf";

// Define o texto do link
link.textContent = "Validador de CPF";


gerarCpfBtn.addEventListener("click", gerarCPF); //gara o cpf 
copiarCpfBtn.addEventListener("click", copiarCPF);
