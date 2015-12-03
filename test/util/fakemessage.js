'use strict';

module.exports = class {

  constructor (content) {
    this.replies = [];
    this.content = content;
  }

  reply (text) {
    this.replies.push(text);
  }

};
