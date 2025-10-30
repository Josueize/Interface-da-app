document.getElementById("cep").addEventListener("blur", (evento)=> {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    if(!(cepInformado.length === 8))
        return;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then( response => response.json())
    .then(data => {

        if(!data.error){
            document.getElementById('logradouro').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
        }else{
            alert("CEP nao encontrado.")
        }     
    })
    .catch(error => console.error("Error ao buscar o CEP: ", error))

    })

    const botaoTema = document.getElementById("botaoTema");

    botaoTema.addEventListener("click", ()=> {
        const temaAtual = localStorage.getItem("tema");
        const novoTema = temaAtual === "dark" ? "light" : "dark";

        document.body.classList.toggle(novoTema);
        localStorage.setItem("tema", novoTema);
        botaoTema.textContent = novoTema === "dark" ? '*' : ')';
    })

    document.addEventListener('DOMContentLoaded', () => {
        const temaSalvo = localStorage.getItem("tema");
        if(temaSalvo === "dark"){
            document.body.classList.add("dark");
            botaoTema.textContent = '*';
        }else{
            botaoTema.textContent = ')';
        }

    })