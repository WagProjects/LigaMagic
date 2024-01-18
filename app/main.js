const container = document.createElement('main');
container.classList.add('container__main');
document.body.appendChild(container);

// Importando módulos
import { createCardPreview } from './cardPreview.js';
import { createDetails } from './details.js';

// Criando elementos
createCardPreview(container);
createDetails(container);