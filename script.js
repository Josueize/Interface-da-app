const botao = document.getElementById("botao");

document.getElementById("cep").addEventListener("blur", (evento) => {
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

     botao.addEventListener( "click", () => {
        var logradouro = document.getElementById('logradouro').value;
        var bairro = document.getElementById('bairro').value;
        var cidade = document.getElementById('cidade').value;
        var estado = document.getElementById('estado').value;
        var cep = document.getElementById('cep').value;
        var numero = document.getElementById('numero').value;

        localStorage.setItem("logradouro", logradouro);
        localStorage.setItem("bairro", bairro);
        localStorage.setItem("cidade", cidade);
        localStorage.setItem("estado", estado);
        localStorage.setItem("cep", cep);
        localStorage.setItem("numero", numero);
 
     })

     document.addEventListener('DOMContentLoaded', () => {
        var cep = localStorage.getItem("cep");

        if (cep) {
            document.getElementById("cep").value = cep;
            document.getElementById("logradouro").value = localStorage.getItem("logradouro");
            document.getElementById("bairro").value = localStorage.getItem("bairro");
            document.getElementById("cidade").value = localStorage.getItem("cidade");
            document.getElementById("estado").value = localStorage.getItem("estado");
            document.getElementById("numero").value = localStorage.getItem("numero");
        }
     })
        