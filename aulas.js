const prompt = require("prompt-sync")();
function agendarPagamento() {
  // Cria um objeto para armazenar as informações do usuário
  const pagamento = {};

  // Solicita as informações ao usuário
  pagamento.nomeBeneficiario = prompt("Nome do beneficiário: ");
  pagamento.valorPagamento = prompt(
    "Valor a ser pago (em reais, sem casas decimais): "
  );
  pagamento.dataVencimento = prompt("Data de vencimento (DD/MM/AAAA): ");

  // Valida as informações do usuário
  if (pagamento.nomeBeneficiario === "") {
    alert("O nome do beneficiário é obrigatório.");
    return;
  }

  if (isNaN(pagamento.valorPagamento)) {
    alert("O valor do pagamento deve ser um número inteiro.");
    return;
  }

  if (pagamento.dataVencimento === "") {
    alert("A data de vencimento é obrigatória.");
    return;
  }

  // Formata a data de vencimento
  const dia = pagamento.dataVencimento.slice(0, 2);
  const mes = pagamento.dataVencimento.slice(3, 5);
  const ano = pagamento.dataVencimento.slice(6, 10);
  const dataFormatada = `${dia}/${mes}/${ano}`;

  // Concatena as informações em uma mensagem de confirmação
  const mensagemConfirmacao = `Pagamento Agendado!
    Valor: R$ ${pagamento.valorPagamento},
    vencimento ${dataFormatada},
    beneficiário ${pagamento.nomeBeneficiario}.`;

  // Exibe a mensagem de confirmação
  console.log(mensagemConfirmacao);
}

// Chama a função para agendar o pagamento
agendarPagamento();
