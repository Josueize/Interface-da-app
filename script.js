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

        const registeredUserAtual = localStorage.getItem("registeredUser");

    })
    .catch(error => console.error("Error ao buscar o CEP: ", error))

    })

     const botaoRegistered = document.getElementById("botaoRegistered");

     botaoRegistered.addEventListener("click", ()=> {
    const registeredAtual = localStorage.getItem("registeredUser");
    const novoRegistered = registeredAtual === "logroudou";

    document.body.classList.toggle(novoRegistered);

    localStorage.setItem ("logradouro", "bairro", "cidade", "estado" novoRegistered)

    botaoRegistered.textContent = novoRegistered === "logradouro" ? '*' : ')';

})

document.addEventListener('DOMContentLoaded', () => {

    const registeredSalvo = localStorage.getItem("registeredUser");
    if(registeredSalvo === "logradouro"){
        document.body.classList.add("logradouro");
        botaoRegistered.textContent = '*';
    }else{
        botaoRegistered.textContent = ')';
    }
})