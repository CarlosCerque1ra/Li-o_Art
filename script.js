// Alternar modo claro/escuro
// Função para alternar entre os temas
function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light');


    // Salva o tema escolhido no "Armazenamento Local (LocalStorage)"
    const mode = html.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);

    // Alterar aparência do título
    updateTextColor();
}

// Função que altera a cor do texto de acordo com o tema
function updateTextColor(){
    currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';
    titleElement.style.color = currentColor;
}

// carrega o tema salvo no LocalStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme){
    document.documentElement.classList.toggle('light', savedTheme === 'light');
}