function gerarCPF() {
    // Gera 9 dígitos aleatórios
    let cpf = '';
    for (let i = 0; i < 9; i++) {
        cpf += Math.floor(Math.random() * 10);
    }
    
    // Calcula primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;
    cpf += digito1;
    
    // Calcula segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;
    cpf += digito2;
    
    // Formata CPF (xxx.xxx.xxx-xx)
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function copiarCPF() {
    const cpfTexto = document.getElementById('cpf-display').textContent;
    navigator.clipboard.writeText(cpfTexto).then(() => {
        alert('CPF copiado!');
    });
}

function exibirNovoCPF() {
    const cpfGerado = gerarCPF();
    document.getElementById('cpf-display').textContent = cpfGerado;
}

// Event listeners
document.getElementById('btn-copy').addEventListener('click', copiarCPF);
document.getElementById('btn-generate').addEventListener('click', exibirNovoCPF);

// Gera CPF ao carregar a página
exibirNovoCPF();