module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(
      require('@photogabble/eleventy-plugin-interlinker'),
      {
        defaultLayout: 'layouts/embed.liquid'
      }
    );
    eleventyConfig.addLayoutAlias("post", "mylayout.njk");
    eleventyConfig.setInputDirectory("content")
  };