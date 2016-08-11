var UserFormView = Backbone.View.extend({
  tagName: 'form',
  template: _.template($("#userFormTemplate").html()),
  render: function(){
    this.$el.html(this.template());
    return this
  }
});