class Listing < ApplicationRecord
  belongs_to :format
  has_many :genres_listings
  has_many :genres, through: :genres_listings
end
