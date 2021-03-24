import { LitElement, html } from 'lit-element';

class UIComp21 extends LitElement {
    static get properties(){
        return{
          allowWriting: {type: Boolean},
          name: {type: String},
          age: {type: Number},
        }
    }
    constructor() {
        super()
        this.name = ''
        this.age = 0
        this.allowWriting = false
    }

    _submitHandler(e){
        e.preventDefault()
        console.log({
            name: e.target.name.value,
            age: parseInt(e.target.age.value,10)
        })
    }

    _allowWritingHandler(){
        this.allowWriting = !this.allowWriting
    }
    render() {
        return html`
            <button @click="${this._allowWritingHandler}">${this.allowWriting ? 'Deshabilitar añadir' : 'Habilitar añadir'}</button>
            <form @submit="${this._submitHandler}"> 
                <input type="text" name="name" .value="${this.name}" ?disabled="${!this.allowWriting}"/> 
                <input type="number" name="age" .value="${this.age}" ?disabled="${!this.allowWriting}"/>
                <button type="submit"  ?disabled="${!this.allowWriting}">Enviar</button>
            </form>
        `;
    }
}
customElements.define('ui-comp-2-1', UIComp21);