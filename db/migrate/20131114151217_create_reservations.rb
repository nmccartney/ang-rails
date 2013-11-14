class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.string :user
      t.string :origin
      t.string :destination
      t.string :day
      t.string :time

      t.timestamps
    end
  end
end
