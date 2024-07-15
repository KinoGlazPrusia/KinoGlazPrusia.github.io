import { PlainComponent } from '../node_modules/plain-reactive/src/index.js';

import pButton from './components/base/pButton.js';

class pApp extends PlainComponent {
    constructor() {
        super('p-app', '../src/pApp.css')
    }

    template() {
        return `
            <h1>Hello world!</h1>
            <p-button>Click me!</p-button>
        `
    }
}

export default customElements.define('p-app', pApp);