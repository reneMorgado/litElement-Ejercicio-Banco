import { LitElement, html } from 'lit-element';

class ApiComponent extends LitElement {
    static get properties() {
        return {
            list: { type: Array },
            loading: {type: Boolean}
        };
    }
    constructor(){
        super()
        this.loading = true;
        this.list = [];
        this._getData()
    }
    render() {
        return html`
            ${this.loading ? html`<h1>Cargando..</h1>` : html`
                ${this.list.map(element=> html`<p>Comprador: ${element.buyer.name}</p>`)}
            `}
        `;
    }
    _getData(){
        let url = 'https://api.datos.gob.mx/v2/Releases_SFP'
        fetch(url)
            .then(r => r.json())
            .then(r => {
                this.list = r.results
                this.loading = false
            })
    }
}

customElements.define('api-component', ApiComponent);