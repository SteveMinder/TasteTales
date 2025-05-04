module.exports = function(eleventyConfig) {
    // CSS durchreichen
    eleventyConfig.addPassthroughCopy("src/css");

    // Optional: Markdown unterstützt Nunjucks (damit {{ title }} etc. in .md funktionieren)
    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "docs"
        },
        markdownTemplateEngine: "njk"
    };
};