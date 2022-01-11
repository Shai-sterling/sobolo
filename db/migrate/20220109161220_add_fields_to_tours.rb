class AddFieldsToTours < ActiveRecord::Migration[6.1]
  def change
    add_column :tours, :latitude, :decimal
    add_column :tours, :longtitude, :decimal
  end
end
