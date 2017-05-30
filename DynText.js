/**
 * CLASS DOCUMENTATION GOES HERE
 *
 * @extends HTMLElement
 */
class DynText extends HTMLElement {
	constructor() {
		super();
		console.log("HEY")	

		// Attach a shadow root to the element.
    	let shadowRoot = this.attachShadow({mode: 'open'});
    	shadowRoot.innerHTML = `
      		<style>:host { ... }</style>
      		<b>in shadow dom!</b>
      		<slot></slot>
    	`;
	}
}

customElements.define('dyn-text', DynText);