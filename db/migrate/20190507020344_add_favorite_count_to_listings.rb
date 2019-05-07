class AddFavoriteCountToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :favorite_count, :integer, :default => 0
  end
end
