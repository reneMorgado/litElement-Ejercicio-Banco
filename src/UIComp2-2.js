import { LitElement, html } from 'lit-element';

class UIComp22 extends LitElement {
    static get properties() {
        return {
            counter: { type: Number }
        };
    }
    constructor() {
        super()
        this.counter = 0
    }
    render() {
        return html`
        <h1>Contador: ${this.counter}</h1>
        <button @click="${this._onIncrement}">Incrementar</button>
        <button @click="${this._onDecrement}">Decrementar</button>
        `;
    }
    _onIncrement(){
        this.counter += 1
    }
    _onDecrement(){
        this.counter -= 1
    }
}

customElements.define('ui-comp-2-2', UIComp22);