import { LitElement, html } from 'lit-element';
import './apiComponent'
import './UIComp1'

class Page1 extends LitElement {

    render() {
        return html`
            <h1>--UI COMPONENT--</h1>
            <ui-comp-1></ui-comp-1>
            <h1>--DM COMPONENT--</h1>
            <api-component></api-component>
        `;
    }
}

customElements.define('page-1', Page1);