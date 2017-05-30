/**
 * CLASS DOCUMENTATION GOES HERE
 *
 * @extends HTMLElement
 */
class DynText extends HTMLElement {
  //empty element
	constructor() {
		super();
    this.order = this.orderFuncs();

    // Attach a shadow root to the element, 
    //now because constructor called before connectedCallback that needs $dynTextEl
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
        <style>:host { ... }</style>
        <span class="dyn-text">
        </span>
    `;

    //Grab the elements from the shadow root
    this.$dynTextEl = shadowRoot.querySelector('.dyn-text');
    }

  connectedCallback() {

    this.$dynTexts = [];
    this.$dynCurrentIndex = 0;

    this.$delay = 1000;
    this.updateDelay(this.getAttribute('data-delay'));
    this.$delimeter = '/';
    this.updateDelimeter(this.getAttribute('data-delimeter'));

    // init text properly
    if (this.textContent.length <= 0) {
        this.updateDynText(this.getAttribute('data-texts'));
    } else {
        this.updateDynText(this.texts2JSON(this.textContent));                 
    }

    //order
    this.$order = "natural";
    this.updateOrder(this.getAttribute('data-order'));

    //Call the draw function initially
    this.draw();
    var that = this;
    //Call the draw function repeadidly
    var callback = function(){
      that.draw();
      setTimeout(callback, that.$delay);
    };
    setTimeout(callback, that.$delay);
  };

  draw() {
    if (this.$dynTexts.length > 0) {
      var i = this.$dynCurrentIndex = (this.$dynCurrentIndex + 1) % this.$dynTexts.length;
      this.$dynTextEl.innerHTML = this.$dynTexts[i];
    }
  };

  //updates
  static get observedAttributes() {
    return ['data-delay', 'data-texts', 'data-order', 'data-delimeter'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
        case "data-order":
            this.updateOrder(newVal);
            break;
        case "data-delimeter":
            this.updateDelimeter(newVal);
            break;
        case "data-texts":
            this.updateDynText(newVal);
            break;
        case "data-delay":
            this.updateDynText(newVal);
            break;
      }
  };

  updateDynText(texts) {
    if (!texts) {
        return;
    }
    try {
        this.$dynTexts = JSON.parse(texts);
    } catch (error) {
        console.log(error)
        return;
    }

    this.$dynCurrentIndex = 0;
    this.$dynTextEl.innerHTML = this.$dynTexts[this.$dynCurrentIndex];
  };

  updateDelay(delay) {
    if (typeof(delay) == "string") {
      this.$delay = parseInt(delay);
    }
  };

  updateDelimeter(delimeter, last) {
    if (!!delimeter) {
      this.$delimeter = delimeter;
    }
  }

  updateOrder(orderName, list) {
      if (!orderName || orderName == 'natural') {
          return; 
      }

      //validate function exists
      if (typeof this.order[orderName] == "function") {
          this.$order = orderName;
          this.$dynTexts = this.order[orderName](this.$dynTexts);//execute order function on current elements
      } else {
          return;
      }
  };

  //return natively supported order functions
  //TODO: make a getter-setter for this? vs modifying hash
  orderFuncs() {
    return {
      "natural": function(list) {return list},
      "reverse": function(list) {
        return list.reverse()},//inplace reverse
      "random": function(list) {
        //Fischer-Yates shuffle by https://bost.ocks.org/mike/shuffle
        var array = list;
        var m = array.length, t, i;

        // While there remain elements to shuffle
        while (m) {
          // Pick a remaining element
          i = Math.floor(Math.random() * m--);
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
      }
    };
  }

}

customElements.define('dyn-text', DynText);