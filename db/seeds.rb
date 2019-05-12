# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
if Format.count == 0
      formats = ["2LP", "LP", "10\"", "8\"", "7\""]
           formats.each do |format|   
              Format.create(name: format)
              end 
      end 
      
      
      if Genre.count == 0
          genres = ["Rock", "Pop", "Hip-Hop", "Classical", "Alternative", "Punk", "Metal", "Country"]
          genres.each do |genre|
                Genre.create(name: genre)
          end
      end 
      
      if User.count == 0 
            alex = User.new(username: "Alex", password: "alex1234", email: "alex@test.com", location: "Sydney")
            alex.save(validate: false)
            bruce = User.new(username: "Bruce", password: "alex1234", email: "bruce@test.com", location: "Sydney")
            bruce.save(validate: false)
            leah = User.new(username: "Leah", password: "leah1234", email: "leah@test.com", location: "Sydney")
            leah.save(validate: false)
      end 
      
      if Listing.count == 0 
            #need user_id 2 for testing
            Listing.create(
                  user_id: 2,
                  title: Faker::Music.album,
                  artist: Faker::Music.band,
                  year: (1900..2019).to_a.sample,
                  format_id: (1..4).to_a.sample,
                  genre_ids: (1..4).to_a,
                  price: (5..2000).to_a.sample,
                  condition: (0..3).to_a.sample,
                  description: Faker::TvShows::GameOfThrones.quote
              )
            

            for i in 1..6
                  Listing.create(
                      user_id: (1..3).to_a.sample,
                      title: Faker::Music.album,
                      artist: Faker::Music.band,
                      year: (1900..2019).to_a.sample,
                      format_id: (1..4).to_a.sample,
                      genre_ids: (1..4).to_a,
                      price: (5..2000).to_a.sample,
                      condition: (0..3).to_a.sample,
                      description: Faker::TvShows::GameOfThrones.quote
                  )
      
            end
      end
      
