# dyn-text: Dynamic Text Web Component

A web component that, in its simplest form, splits a slash separated list and displays them one at a time, creating a sort of inline slideshow.

See example usage below for details. 

No external libraries required other than whatever it currently takes for Web Components to work in browsers. 

## Installation

### Manually

from [github.com/vjcharles/dyn-text](https://github.com/vjcharles/dyn-text)

Include the dyn-text.comp.html file where you put your dependencies, and reference it in your main page for instance:

    components/dyn-text.comp.html

within index.html

    <script src="libraries/webcomponents-lite.js"></script>
    <link rel="import" href="components/dyn-text.comp.html">

### NPM


Available on [npm](https://www.npmjs.com/) as [dyn-text](https://www.npmjs.com/package/dyn-text)

    npm install dyn-text


### Bower

Available on [bower](https://bower.io/) as [dyn-text](https://github.com/vjcharles/dyn-text)

    bower install dyn-text

## Usage

    <script src="webcomponents-lite.js"></script>
    <link rel="import" href="dyn-text.comp.html">

    ...

    I'm feeling <dyn-text data-delay="3000" data-order="random">amazing/horrible/ok/great</dyn-text>!
    How are you <dyn-text>looking/feeling/doing</dyn-text>?
    I feel like eating a <dyn-text data-delay="500" data-texts='["burger","salad", "pizza"]'></dyn-text>

### Options

* data-delay: How long to show each item in the list, in miliseconds. Defaults to 2 seconds (2000 ms).
* data-order: Built in order functions include natural, random without replacement, reverse. Defaults to natural order / order unchanged.
* data-texts: List in JSON form. Checked if dyn-text.textContent is empty.
* data-delimiter: How to parse innerText. Defaults to a slash separator. Works with a single string or a two element array, like `[",", "and"]`. (Text can be with or without an Oxford Comma.)  
  Note: Data delimiter only affects textContent at initial element load time.  


Below are more examples with a various options.

<!---
```
<custom-element-demo>
  <template>
    <script src="webcomponents-lite.js"></script>
    <link rel="import" href="dyn-text.comp.html">
    <next-code-block></next-code-block>    
  </template>
</custom-element-demo>
```
-->

```html
    <dyn-text data-delay="1500" data-order="random">Hello/Hi/Howdy</dyn-text>
    <br/>
    I love <dyn-text data-delay="3000" data-order="reverse" data-delimiter='[",","or"]'>apples, bananas or strawberries</dyn-text> with peanut butter.
    <br/>
    Hey there, <dyn-text>dude/dudess/doodle/duder</dyn-text>.
```

## History

This is it! Or take a look at `git log`

## Credits

Sources mentioned inline

## License

[MIT](LICENSE)

