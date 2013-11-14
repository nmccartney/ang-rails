class CreateAirportJoins < ActiveRecord::Migration
  def change
    create_table :airport_joins do |t|
      t.string :airport_id
      t.string :destination_id

      t.timestamps
    end
  end
end
