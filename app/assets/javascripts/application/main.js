var users = new UsersCollection;
users.fetch();
var usersCollectionView = new UsersCollectionView({collection: users});
var userFormView = new UserFormView({users: this.users});
// userFormView.render();
$(function(){
  userFormView.render();
});