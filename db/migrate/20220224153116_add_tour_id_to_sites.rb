class AddTourIdToSites < ActiveRecord::Migration[6.1]
  def change
    add_column :sites, :tour_id, :integer
  end
end
