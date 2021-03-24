import { LitElement, html } from 'lit-element';
import './UIComp2-1'
import './UIComp2-2'

class Page2 extends LitElement {
    render() {
        return html`
            <h1>UI COMPONENT</h1>
            <ui-comp-2-1></ui-comp-2-1>
            <h1>UI COMPONENT</h1>
            <ui-comp-2-2></ui-comp-2-2>
        `;
    }
}
customElements.define('page-2', Page2);