// Copyright (c) Mathew Potter
// http://matthewoden.github.com/classchain
/* global define */

(function(){
    'use strict'
    // arguments: Array([class, condition])
    function classchain(){
      return [].reduce.call(arguments, function(prev, current){
          if(Array.isArray(current)){
            if(current.length > 1){
              return current[1] ? prev +' '+getString(current[0]) : prev;
            } else {
              return prev +' '+getString(current[0]);
            }
          }
          return prev +' '+getString(current);
        }, '');
      }

    function getString(item){
      return typeof(item) === 'string'? item : item.toString ? item.toString() : '';
    }

    //export to multiple environments.
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = classchain;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
      define('classchain', function () {
        return classchain;
      });
    } else {
      window.classchain = classchain;
    }
}());
