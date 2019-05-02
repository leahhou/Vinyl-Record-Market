class AddPaymentIdToPurchases < ActiveRecord::Migration[5.2]
  def change
    add_column :purchases, :payment_id, :string
  end
end
