export function createDetails(container){
    // Criação da secao detalhes
    const homeContainer = document.createElement('section')
    const menuNav = document.createElement('nav')
    const cardInfo = document.createElement('section')
    const cardNumber = document.createElement('div')
    const cardTitle = document.createElement('div')
    const cardList = document.createElement('div')
    const cardDetail = document.createElement('div')

    // Adicionando classes
    homeContainer.classList.add('home__container')
    menuNav.classList.add('menu__navegacao')
    cardInfo.classList.add('card__info')
    cardNumber.classList.add('card__number')
    cardTitle.classList.add('card__title')
    cardList.classList.add('card__list')
    cardDetail.classList.add('card__detail')

    // Adicionando aos elementos pais
    container.appendChild(homeContainer)
    homeContainer.appendChild(menuNav)
    homeContainer.appendChild(cardInfo)
    cardInfo.appendChild(cardNumber)
    cardInfo.appendChild(cardTitle)
    cardInfo.appendChild(cardList)
    cardInfo.appendChild(cardDetail)

    // Criano o menu de navegacao
    menuNav.innerHTML = `
        <ul class='list__menu'>
            <li class='list__item'><a href='#'>Home</a></li>
            <li class='list__item'><a href='#'>Magic: The Gathering</a></li>
            <li class='list__item'><a href='#'>Busca</a></li>
            <li class='list__item'><a href='#'>Bazar - Lista de Desejos</a></li>
        </ul>
    `
    
    //Criando o cardNumber
    cardNumber.innerHTML = `
    <label>
        <img class="card__tag" src="./images/Card_Number.svg" alt="Numero da carta"/> 
        <span class="card__number-id">#045</span> 
        <p class="card__set-name">Dominaria Remastered</p>
    </label>
    <select>
        <option value="dmr">DMR</option>
    </select>
    `

    //Criando o cardInfo
    cardTitle.innerHTML = `
        <div>
            <h1>Contramágica</h1>
            <p>Counterspell</p>
        </div>
        <div class='card__favorites'>
            <a href='#'><img src='./images/Favorite.svg' alt='Icone Favoritar' /></a>
            <a href='#'><img src='./images/Icon_More.svg' id='icon__more' alt='Icone mais detalhes'/></a>
        </div>
    `

    //Criando o cardList
    cardList.innerHTML = `
        <h2>Lista de Compras <img src='./images/Icon_Help.svg' alt='Icone Ajuda'/></h2> 
        <p>Add a carta aqui e deixe que a Liga calcule o melhor preço para você!</p>
        <form>
            <div class='number-input'>
                <input type='number' id='number-input-custom'/>
            </div>
            <input type='button' />
            <input type='submit' value="Adicionar na lista"/>
        </form>
    `
    
    //Criando o cardDetail
    cardDetail.innerHTML = `
        <span>
            <h3>Detalhes da Carta</h3><p><a href="#">Ver Tudo</a></p>
        </span>
        <div class='card__detail-cor'>
            <p>Cor</p>
            <p class="card__detail-cor-azul">Azul</p>
        </div>
        <div class='card__detail-custo'>
            <p>Custo de Mana</p>
            <div>
                <img src='./images/Icon_BlueMana.svg' alt="Icone de Mana" />
                <img src='./images/Icon_BlueMana.svg' alt="Icone de Mana" />
            </div>
        </div>
        <div class='card__detail-tipo'>
            <p>Tipo</p>
            <h4>Mágica Instantânea</h4>
        </div>
        <span>
            <h3>Preço Médio no Marketplace <img src='./images/Icon_Help.svg' alt='Icone Ajuda'/></h3><p><a href="#">Ver Tudo</a></p>
        </span>
        <div class='card__detail-preco'>
            <div>
                <img src='./images/Icon_Normal.png' alt='Icone normal' /> <p>Normal</p>
            </div>
            <ul>
                <li>R$ 6,28</li>
                <li>R$ 9,39</li>
                <li>R$ 14,00</li>
            </ul>
        </div>
    `

}