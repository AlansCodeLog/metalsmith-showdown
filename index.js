const showdown = require("showdown")
module.exports = plugin;



function plugin(opts){
  const converter = typeof opts.options !== "undefined" ? new showdown.Converter(opts.options) : new showdown.Converter()
  function convert (post, property) {
    if (property !== "contents" && typeof post[property] !== "undefined") {
      post[property] = converter.makeHtml(post[property])
    } else if (property == "contents" && typeof post.contents !== "undefined") {
      post.contents = new Buffer (converter.makeHtml(post.contents.toString()))
    }
    return post
  }
  return function(files, metalsmith, done){
    Object.keys(files).forEach(function(file){
        post = files[file]
        if (typeof opts.convert !== "undefined") {
          for (property of opts.convert) {
            convert(post, property)
          }
        } else {
          convert(post, "contents")
        }
    })
    done()
  }
}
