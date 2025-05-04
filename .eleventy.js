module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");

    eleventyConfig.addCollection("recipes", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/recipes/*.md");
    });


    return {
        pathPrefix: "/TasteTales/",
        dir: {
            input: "src",
            output: "docs",
            includes: "_includes"
        },
        markdownTemplateEngine: "njk"
    };
};