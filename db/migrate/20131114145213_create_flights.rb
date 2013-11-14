class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :number
      t.string :origin
      t.string :destination
      t.string :price

      t.timestamps
    end
  end
end
