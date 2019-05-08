class Listing < ApplicationRecord
  belongs_to :user
  belongs_to :format
  has_many :genres_listings, dependent: :destroy
  has_many :genres, through: :genres_listings
  accepts_nested_attributes_for :genres_listings
  has_one :purchase
  enum condition: { poor: 0, good: 1, excellent: 2, mint: 3}
  has_one_attached :cover
  # Validation
  validates :artist, :title, :year, :format_id, :description, :condition, :price, presence: true
  validates :year, format: {with: /\A(19|20)\d{2}\z/, message: "Please enter year between 1900-2099"}
  validates :genre_ids, presence: true, on: "update"
  
end
