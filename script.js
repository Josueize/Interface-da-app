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

            const userData = {
                logradouro: logradouro,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            };
            

            const userDataString = JSON.stringify(userData);

            localStorage.setItem('registeredUser', userDataString);
            cadastro.textContent = userData === "cep" ? 'userData' : ')';

            document.addEventListener('DOMContentLoaded',() =>{
                const datasalvo = localStorage.getItem("UserData");
                if(datasalvo === userData){
                    document.body.classList.add("userData");
                    datasalvo.textContent = 'userData';

                }
            })      
            

            
        }else{
            alert("CEP nao encontrado.")
        }     
    })
    .catch(error => console.error("Error ao buscar o CEP: ", error))

    })

    