/**
 * CLASS DOCUMENTATION GOES HERE
 *
 * @extends HTMLElement
 */
class DynText extends HTMLElement {
	constructor() {
		super();
		console.log("HEY")	
	}
}


customElements.define('dyn-text', DynText);
