10.times do |x|
  User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.safe_email, username: Faker::Internet.user_name)
end
