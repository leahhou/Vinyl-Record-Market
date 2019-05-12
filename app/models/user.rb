class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :listings, :dependent => :destroy
  has_many :purchases
  has_one_attached :avatar
  has_many :favorites
  has_many :favorite_listings, through: :favorites, source: :favorited, source_type: 'Listing'
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
       

        validates :username, presence: :true, uniqueness: { case_sensitive: false }
        validates :location, presence: :true
        
        # Only allow letter, number, underscore and punctuation.
         validates_format_of :username, with: /^[a-zA-Z0-9_\.]*$/, :multiline => true
         
         #validate username 
         validate :validate_username

          def validate_username
            if User.where(email: username).exists?
              errors.add(:username, :invalid)
            end
          end
end
