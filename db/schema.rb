# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20131114202747) do

  create_table "airport_joins", :force => true do |t|
    t.string   "airport_id"
    t.string   "destination_id"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  create_table "airports", :force => true do |t|
    t.string   "code"
    t.string   "name"
    t.string   "city"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "entries", :force => true do |t|
    t.string   "name"
    t.boolean  "winner"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "flights", :force => true do |t|
    t.string   "number"
    t.string   "origin"
    t.string   "destination"
    t.string   "price"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "reservations", :force => true do |t|
    t.string   "user"
    t.string   "origin"
    t.string   "destination"
    t.string   "day"
    t.string   "time"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

end
