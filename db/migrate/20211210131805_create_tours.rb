class CreateTours < ActiveRecord::Migration[6.1]
  def change
    create_table :tours do |t|
      t.string "name", null: false
      t.decimal "price", precision: 5, scale: 2, null: false
      t.integer "duration"
      t.string "accommodation"
      t.string "meals"
      t.string "entry_tickets"
      t.string "pick_up"
      t.string "transport"


      t.timestamps
    end
  end
end
