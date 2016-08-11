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
  tagName: 'form',
  template: _.template("<button>Button</button>"),
  template2: _.template($("#userFormTemplate").html()),
  events: {
    'click button': 'showForm'
  },
  render: function(){
    html = this.$el.html(this.template());
    $('#userForm').append(html);
  },
  showForm: function(){
    console.log('test')
    $('#userForm').append(this.$el.html(this.template2()));

    return false;
  }
});