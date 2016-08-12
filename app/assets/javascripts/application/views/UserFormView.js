// var UserFormView = Backbone.View.extend({
//   tagName: 'form',
//   template: _.template($("#userFormTemplate").html()),
//   template2: _.template('<button>Click</button>'),
//   events: {
//     'click button': 'showForm'
//   },
//   render: function(){
//     $('#userForm').html(this.template2());
//   },
//   showForm: function(){
//     console.log("button clicked");
//     // $('#userForm').append(this.$el.html(this.template()));
//     // return false;
//   }
// });

var UserFormView = Backbone.View.extend({
  // el: $('#userForm'),
  tagName: 'form',
  button: _.template("<a href='#'>Button</a>"),
  form: _.template($("#userFormTemplate").html()),
  initialize: function(options){
    this.users = options.users;
  },
  events: {
    'click a': 'showForm',
    'click button': 'createUser'
  },
  render: function(){
    html = this.$el.html(this.button());
    $('#userForm').append(html);
  },
  showForm: function(){
    console.log('test');
    $('#userForm').append(this.$el.html(this.form()));
    return false;
  },
  createUser: function(e){
    var userAttrs = {
      first_name: $('#firstName').val(),
      last_name: $('#lastName').val(),
      email: $('#eMail').val(),
      username: $('#userName').val()
    }
    this.users.create(userAttrs);
    return false;
  }
});