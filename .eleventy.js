module.exports = function(eleventyConfig) {
  // 🔥 THIS is the line that matters
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: "pages",
      includes: "../_includes",
      output: "_site"
    },
    passthroughFileCopy: true
  };
};
