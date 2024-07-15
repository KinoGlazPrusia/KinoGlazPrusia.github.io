import { PlainComponent } from '../../../node_modules/plain-reactive/src/index.js';

class pButton extends PlainComponent {
    constructor() {
        super('p-button', '../src/components/base/pButton.css')
    }

    template() {
        return `
            <button>${this.textContent}</button>
        `
    }
}

export default customElements.define('p-button', pButton);