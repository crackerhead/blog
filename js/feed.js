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

$('.form-signin').on('submit', function(e) {

    // Prevent Default Submit Event
    e.preventDefault();

    // Get data from the form and put them into variables
    var data = $(this).serializeArray(),
        username = data[0].value,
        password = data[1].value;

    // Call Parse Login function with those variables
    Parse.User.logIn(username, password, {
        // If the username and password matches
        success: function(user) {
            alert('Welcome!');
        },
        // If there is an error
        error: function(user, error) {
            console.log(error);
        }
    });

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
