class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :artist
      t.string :title
      t.integer :year
      t.references :format, foreign_key: true
      t.integer :price
      t.integer :condition
      t.text :description

      t.timestamps
    end
  end
end
