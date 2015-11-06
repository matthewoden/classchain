#classchain - npm
A very small utility for conditionally chaining classnames together. Intended for use with CSS Modules/React.

## Installation:
```
npm install classchain
```
Works in commonjs, requirejs, and webpack. If added via ```<script>``` tag, it creates a global classchain method.

## Usage
The classchain method takes any number of arguments, which can be arrays of two items ( in ```[classname, condition]``` format), or a string. Numbers are converted to strings, and falsy conditions are ignored.

```javascript
var classchain = require('classchain');

classchain('foo', ['bar', true]);  // => 'foo bar'
classchain('foo', ['bar', false]); // => 'foo'
classchain('foo bar'); // => 'foo bar'

// non string values converted to strings if possible, otherwise ignored.
classchain('foo', [1, true]); // => 'foo 1';

// classnames where conditions evaluate to false are ignored.
classchain('foo', ['bar', null], ['baz', undefined]); //=> 'foo'

```

### Usage with React.js

```javascript

var classchain = require('classchain');

var Button = React.createClass({
  // ...
  render () {
    var btnClass = classchain('btn',
                  ['btn--pressed', this.state.isPressed],
                  ['btn--over', !this.state.isPressed && this.state.isHovered]);

    return <button className={btnClass}>{this.props.label}</button>;
  }
});

```

### Usage with Webpack/CSSModules

```javascript

var classchain = require('classchain');
var styles = require('./styles.css');


var Button = React.createClass({
  // ...
  render () {
    var btnClass = classchain(styles.main,
                  [styles.pressed, this.state.isPressed],
                  [styles.over, !this.state.isPressed && this.state.isHovered]);

    return <button className={btnClass}>{this.props.label}</button>;
  }
});

```


## ...Doesn't the Classnames library already do this?
It does! Normally, it does an exceptional job. But relying on the object literal format means it stumbles when classnames aren't hard-coded strings. Which means we have to either transpile object literals into something the classnames module can understand, or rely on it's alternate bind format.

Classchain isn't any more verbose, but accepts formats outside of string.
