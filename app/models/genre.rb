class Genre < ApplicationRecord
    has_many :genres_listings
    has_many :listings, through: :genres_listings, dependent: :destroy
    # Validation
    validates :name, presence: true, allow_blank: false
end
