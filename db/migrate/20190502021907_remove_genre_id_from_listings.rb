class RemoveGenreIdFromListings < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :genre_id, :integer
  end
end
