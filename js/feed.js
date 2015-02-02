$(function() {

    Parse.$ = jQuery;

    Parse.initialize("E8kTYA9JhQzxNkj2LTf3ddTZcwksdjTwAHJqjtTm", "Q9VlKqbhjPIGvoeymCWLijfWyGIGZz2jHXaSgTRN");

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });

var Blog = Parse.Object.extend("Blog");

var Blogs = Parse.Collection.extend({
    model: Blog
});

var blogs = new Blogs();

blogs.fetch({
   success: function(blogs) {
      var blogsView = new BlogsView({ collection: blogs });
      blogsView.render();
      $('.main-container').html(blogsView.el);
    },
    error: function(blogs, error) {
        console.log(error);
    }
});

var BlogsView =  Parse.View.extend({
    template: Handlebars.compile($('#blogs-tpl').html()),
    render: function(){
        var collection = { blog: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }
});





})
$(document)
  .ready(function() {

    $('.filter.menu .item')
      .tab()
    ;

    $('.ui.rating')
      .rating({
        clearable: true
      })
    ;

    $('.ui.sidebar')
      .sidebar('attach events', '.launch.button')
    ;

    $('.ui.dropdown')
      .dropdown()
    ;

  })
;
