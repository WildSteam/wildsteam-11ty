module.exports = function(eleventyConfig) {
  // Allow Netlify CMS and uploads to be copied over to the final _site directory
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("uploads");

  return {
    dir: {
      input: "pages",
      includes: "../_includes",
      output: "_site"
    },
    passthroughFileCopy: true
  };
};
