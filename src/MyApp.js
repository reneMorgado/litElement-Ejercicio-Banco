import { LitElement, html, css } from 'lit-element';
import './page1'
import './page2'
export class MyApp extends LitElement {
  static get properties(){
    return{
      show1 : {type: Boolean}
    }
  }
  constructor(){
    super()
    this.show1 = true
  }
  _showPage1(){
    this.show1 = true
  }
  _showPage2(){
    this.show1 = false
  }
  render() {
    return html`
      <button @click="${this._showPage1}">Pagina 1</button>
      <button @click="${this._showPage2}">Pagina 2</button>
      ${this.show1 ? html`<page-1></page-1>` : html`<page-2></page-2>`}
    `;
  }
}
