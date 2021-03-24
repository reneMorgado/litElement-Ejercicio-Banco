import { LitElement, html,css } from 'lit-element';

class UIComp1 extends LitElement {
    static get properties() {
        return {
            items: { type: Array },
            title: { type: String }
        };
    }
    static get styles(){
        return css`
            .awesomeTitle{
                font-size: 40px;
                color: #BF930D;
                text-transform: uppercase;
                font-family: sans-serif;
            }
            .awesomeList{
                list-style: upper-alpha;
                font-size: 20px;
                color: #BF930D;
                font-family: sans-serif;
            }
            .awesomeMessage{
                font-size: 30px;
                font-weight:normal;
                color: #BF930D;
                font-family: sans-serif;
            }
        `
    }
    constructor() {
        super()
        this.title = 'My favorite movies'
        this.items = [{
            id: 1,
            name: 'Life is beautiful',
            year: 1997
        },
        {
            id: 2,
            name: 'Avengers - End game.',
            year: 2019
        },
        {
            id: 3,
            name: 'Interstellar',
            year: 2014
        },
        {
            id: 4,
            name: 'Hush',
            year: 2016
        },
        {
            id: 5,
            name: 'The purge',
            year: 2013
        }]
    }
    
    render() {
        return html`
            <h1 class="awesomeTitle">${this.title}</h1>
            ${this.items.length > 0 ? html`
            <ul class="awesomeList">
                ${this.items.map(item=> html`<li class="awesomeElement">${item.name}(${item.year})</li>`)}
            </ul>
            ` : html`<h1 class="awesomeMessage">No hay datos</h1>`}
        `;
    }
}
customElements.define('ui-comp-1', UIComp1);