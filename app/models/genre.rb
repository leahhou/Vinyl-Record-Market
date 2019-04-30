class Genre < ApplicationRecord
    has_many :genres_listings
    has_many :listings, through: :genres_listings
end
