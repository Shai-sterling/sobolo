class CreateTours < ActiveRecord::Migration[6.1]
  def change
    create_table :tours do |t|
      t.string "name", null: false
      t.decimal "price", precision: 5, scale: 2, null: false
      t.integer "duration"
      t.boolean "accommodation"
      t.boolean "meals"
      t.boolean "entry_tickets"
      t.boolean "pick_up"
      t.boolean "transport"


      t.timestamps
    end
  end
end
