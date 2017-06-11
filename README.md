# <dyn-text> Dynamic Text Web Component

A web component that, in its simplest form, splits a slash separated list and displays them one at a time, creating a sort of inline slideshow.

See example usage below for details. 

No external libraries required other than whatever it currently takes for Web Components to work in browsers. 

## Installation

### Manually

from [github.com/vjcharles/dyn-text](github.com/vjcharles/dyn-text)

Include the dyn-text.comp.html file where you put your dependencies, and reference it in your main page for instance:

   components/dyn-text.comp.html

within index.html

   <script src="libraries/webcomponents-lite.js"></script>
   <link rel="import" href="components/dyn-text.comp.html">

### NPM

TODO

Available on [npm](https://www.npmjs.com/) as [dyn-text](https://www.npmjs.com/package/dyn-text)

    npm install dyn-text


### Bower

TODO 
Available on [bower](https://bower.io/) as [dyn-text](https://github.com/vjcharles/dyn-text)

    bower install dyn-text

## Usage

TODO: Write usage instructions

    <script src="webcomponents-lite.js"></script>
    <link rel="import" href="bower_components/dyn-text.comp.html">
  
    I'm feeling <dyn-text data-delay="3000" data-order="random">amazing/horrible/ok/great</dyn-text>!
    How are you <dyn-text>looking/feeling/doing</dyn-text>?

    I feel like eating a <dyn-text data-delay="500" data-texts='["burger","salad", "pizza"]'></dyn-text>

### Options

* data-delay: How long to show each item in the list, in miliseconds. Defaults to 2 seconds (2000 ms).
* data-order: Built in order functions include natural, random without replacement, reverse. Defaults to natural order / order unchanged.
* data-texts: list in json form. Checks here first if no data text element is prent will parse from innerText of dyn-text element.
* data-delimiter: How to parse innerText. Defaults to a slash separator.
  TODO: other delimiters have a different character for last, like 'this, this or this' or is the last delimiter. 


TODO: data-split feature doesn't exist yet on multiple items.
Here is a massive element with all the configurations (except data-texts) in the single tag as an example usage of each.

    <dyn-text data-delay="2000" data-order="reverse" data-split='[",","or", ", or"]'>Apples, Bananas and Strawberries</dyn-text>


## History

This is it! Or take a look at `git log`

## Credits

Sources mentioned inline

## License

MIT

Copyright 2017 VJCharles

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
