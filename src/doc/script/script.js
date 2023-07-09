const personagens = document.querySelectorAll('.personagem');
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // remover seleção do personagem
        const personagemSelecionado = document.querySelector('.selecionado');
        personagem.classList.add('selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');
        
        // alterar imagem do personagem selecionado
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `/src/doc/${idPersonagem}.gif`

        // alterar nome personagem do selecionado
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        
        // alterar descrição do personagem selecionado
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    
    })
}) 