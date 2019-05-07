# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
formats = ["2LP", "LP", "10\"", "8\"", "7\""]
     formats.each do |format|   
        Format.create(name: format)
        end 


<<<<<<< HEAD
if User.count == 0
    (1..10).each do |i|
    user = User.new(
        username: Faker::Name.unique.name,
        email: Faker::Internet.free_email,
        password: "cheese",
        password_confirmation: "cheese",
        location: Faker::University.name
    )
    user.save!(validate: false)
    p "Created #{i} Kickass users"
    p user
    end
end
=======
>>>>>>> dev

    genres = ["Rock", "Pop", "Hip-Hop", "Classical", "Alternative", "Punk", "Metal", "Country"]
    genres.each do |genre|
          Genre.create(name: genre)
    end
