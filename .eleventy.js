module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");

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