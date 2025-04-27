cep.onkeyup = () => {
    if (cep.value.length == 8) {
        console.log("Digitei o CEP");
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
            .then(resposta => resposta.json())
            .then(resposta2 => {
                rua.value = resposta2.logradouro;
                bairro.value = resposta2.bairro;
                cidade.value = resposta2.localidade;
                uf.value = resposta2.uf;
            })
            .finally(() => {
                alert("CEP encontrado com sucesso!");
            })
    }
}