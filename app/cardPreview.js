export function createCardPreview(container){
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