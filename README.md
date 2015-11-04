#classchain - npm
A very small utility for joining classnames together. Intended for use with CSS Modules/React.

## Installation:
```
npm install classchain
```
Works in commonjs, requirejs, and webpack. If added via ```<script>``` tag, it creates a global classlist method.

## Usage
The classchain method takes a single optional argument, representing constant classnames. Dynamic/conditional classnames are added with a chained ```use``` property. Falsy conditions and non-string values are ignored.

```javascript
var classchain = require('classchain');

classchain('foo').use('bar', true).list;  // => 'foo bar'
classchain('foo').use('bar', false).list; // => 'foo'
classchain().use('foo bar', true).list; // => 'foo bar'

// non string values are ignored.
classchain('foo').use(1, true).list; // => 'foo';

// classnames without conditions, or evaluate to false are ignored.
classchain('foo').use('bar').use('baz', null).use('fizz', undefined).list; //=> 'foo'

```

### Usage with React.js

```javascript

var classchain = require('classchain');

var Button = React.createClass({
  // ...
  render () {
    var btnClass = classchain('btn')
                  .use('btn--pressed', this.state.isPressed)
                  .use('btn--over', !this.state.isPressed && this.state.isHovered)
                  .list;
    return <button className={btnClass}>{this.props.label}</button>;
  }
});

```

## ...Doesn't the Classnames library already do this?
It does! Normally, it does an exceptional job. But relying on the object literal format means it stumbles when classnames aren't hard-coded strings. Users have to either transpile object literals into something the classnames module can understand, or rely on it's alternate bind format.

Classchain is a little more verbose, but doesn't need transpilers or bindings.

##API

### new Classchain(constantClasses)
Create a new classchain instance, and adds a string of constant, non-dynamic classes.

### use(class, condition)
Use this ```class```, given a ```condition```. The ```condition``` can be anything that evaluates to true.

### list
Property. The current (space-delimited) list of classnames.
