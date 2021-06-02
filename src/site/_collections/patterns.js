/**
 * Returns all patterns in the pattern library
 *
 * @param {EleventyCollectionObject} Eleventy collection API
 * @return {Array} Collection of patterns
 */

module.exports = (collections) => {
  return collections
    .getFilteredByGlob(
      './src/site/content/en/pattern-library/patterns/**/*.njk',
    )
    .map((item) => {
      item.permalink = false;
      return item;
    });
};