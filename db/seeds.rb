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


if User.count == 0
    (1..10).each do |i|
    user = User.new(
        username: Faker::Name.unique.name,
        email: Faker::Internet.free_email,
        encrypted_password: "cheese",
        location: Faker::University.name
    )
    user.save!(validate: false)
    p "Created #{i} Kickass users"
    p user
    end
end

if Listing.count == 0
    for i in 1..20
        Listing.create(
            user_id: (1..20).to_a.sample,
            title: Faker::Music.album,
            artist: Faker::Music.band,
            year: (1900..2019).to_a.sample,
            format_id: (1..3).to_a.sample,
            price: (5..2000).to_a.sample,
            condition: (1..5).to_a.sample,
            description: Faker::TvShows::GameOfThrones.quote
        )
        puts "Created #{i} listings"
    end
end
