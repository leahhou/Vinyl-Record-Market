# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
if Format.count == 0
    for i in 1..20
        Format.create(
        name: "Good"
        )
        puts "Created #{i} Sweet ass formats"
    end
end

if Genre.count == 0
    for i in 1..5
        Genre.create(
            name: Faker::Name.unique.name
        )
        puts "Created #{i} Awesome ass gendre"
    end
end


formats = ["2LP", "LP", "10\"", "8\"", "7\""]
     formats.each do |format|   
        Format.create(name: format)
        end 

    genres = ["Rock", "Pop", "Hip-Hop", "Classical", "Alternative", "Punk", "Metal", "Country"]
    genres.each do |genre|
          Genre.create(name: genre)
    end