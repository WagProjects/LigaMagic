const container = document.querySelector('.container')

function cardPreview(){
    // Criação dos elementos
    const cardContainer = document.createElement('section')
    const divCard = document.createElement('div')
    const card = document.createElement('img')
    const divCarousel = document.createElement('div')

    // Adicionando classes
    cardContainer.classList.add('card__container')
    divCard.classList.add('div__card')
    divCarousel.classList.add('div__carousel')
    
    // Adicionando atributos na imagem
    card.setAttribute('src', './images/Carta_Counterspell.svg')
    card.setAttribute('alt', 'Preview da Carta')

    // Adicionando aos elementos pais
    container.appendChild(cardContainer)
    divCard.appendChild(card)
    cardContainer.appendChild(divCard)
    cardContainer.appendChild(divCarousel)
    

    // Criando carousel dentro da divCarousel
    divCarousel.innerHTML = `
        <div class="carousel__container">
            <div class="carousel">
                <div class="slide"><img src='./images/Card_Carroussel-left.svg' alt='Primeira imagem do carroussel!' /></div>
                <div class="slide"><img src='./images/Card_Carroussel-center.svg' alt='Segunda imagem do carroussel!' /></div>
                <div class="slide"><img src='./images/Card_Carroussel-right.svg' alt='Terceira imagem do carroussel!' /></div>
            </div>
            <button id="prevBtn"><img src='./images/VectorLeft.svg' alt='Anterior' /></button>
            <button id="nextBtn"><img src='./images/VectorRight.svg' alt='Proximo' /></button>
        </div>
    `
}


function details(){
    // Criação da secao detalhes
    const cardDetails = document.createElement('section')
    const menuNav = document.createElement('nav')

    // Adicionando classes
    cardDetails.classList.add('card__details')
    menuNav.classList.add('menu__navegacao')

    // Adicionando a secao na div
    container.appendChild(cardDetails)
    cardDetails.appendChild(menuNav)

    // Criano o menu de navegacao
    menuNav.innerHTML = `
        <ul class='list__menu'>
            <li class='list__item'><a href='#'>Home</a></li>
            <li class='list__item'><a href='#'>Magic: The Gathering</a></li>
            <li class='list__item'><a href='#'>Busca</a></li>
            <li class='list__item'><a href='#'>Bazar - Lista de Desejos</a></li>
        </ul>
    `
}

cardPreview()
details()