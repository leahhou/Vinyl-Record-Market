class AddGenreIdToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :genre_id, :integer
  end
end
