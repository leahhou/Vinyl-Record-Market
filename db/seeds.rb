# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

for i in 1..20
    Listing.create(
        title: Faker::Music.album
        artist: Faker::Music.band
        
        year: (1900..2019).to_a.sample
        format: (1..3).to_a.sample
        price: (5..2000).to_a.sample
        condition: (1..5).to_a.sample
        description: Faker::TvShows::GameOfThrones.quote
    )
    puts "Created #{i} albums"
end

for i in 1..20
    User.create(
        username: Faker::Name.unique.name
        email: Faker::Internet.unique.email
        password: "cheese"
    )