class Listing < ApplicationRecord
  belongs_to :user
  belongs_to :format
  has_many :genres_listings
  has_many :genres, through: :genres_listings
  accepts_nested_attributes_for :genres_listings
  has_one :purchase
  enum condition: { wore: 0, normal: 1, good: 2, excellent: 3}
end
