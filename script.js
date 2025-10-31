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

            localStorage.setItem("registeredUser");
            localStorage.setItem("logradouro:{}","bairro:{}","cidade:{}","estado:{}", JSON.stringify({ theme: 'dark', notifications: true }));
           
            const registeredUser = localStorage.getItem("logradouro:{}","bairro:{}","cidade:{}","estado:{}");
            const userSettings = JSON.parse(localStorage.getItem("logradouro:{}","bairro:{}","cidade:{}","estado:{}"));
        
            cadastro.textContent = registeredUser === "cep" ? 'registeredUser' : ')';   

            }else{
            alert("CEP nao encontrado.")
        }     
    })
    .catch(error => console.error("Error ao buscar o CEP: ", error));

    })

    