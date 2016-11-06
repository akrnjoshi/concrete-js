/**
 * @class TokenTagging
 * @classdesc concrete.js extensions to the TokenTagging class
 */

/** Return the TaggedToken (or null) with the specified tokenIndex
 * @param {Number} tokenIndex
 * @returns {TaggedToken|null}
 */
TokenTagging.prototype.getTaggedTokenWithTokenIndex = function(tokenIndex) {
  for (var i = 0; i < this.taggedTokenList.length; i++) {
    if (this.taggedTokenList[i].tokenIndex === tokenIndex) {
      return this.taggedTokenList[i];
    }
  }
  return null;
};
