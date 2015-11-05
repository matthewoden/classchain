// Copyright (c) Mathew Potter
// http://matthewoden.github.com/classchain
/* global define */

(function(){
    'use strict'

    function classchain(list){
      if(!(this instanceof classchain)){
        return new classchain(list);
      }
      this.list = (list.constructor === String) ? list : '';
    }

    classchain.prototype.use = function(classname, condition){
      if(classname.constructor === String && condition){
        this.list = this.list.concat(' ', classname);
      }
      return this;
    };

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
