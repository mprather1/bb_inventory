var users = new UsersCollection;
users.fetch();
var usersCollectionView = new UsersCollectionView({collection: users});
var userFormView = new UserFormView;
// userFormView.render();
$(function(){
  userFormView.render();
});