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

ActiveRecord::Schema.define(:version => 20120204083618) do

  create_table "abstract_files", :force => true do |t|
    t.string   "content"
    t.string   "doc_file_name"
    t.string   "doc_content_type"
    t.integer  "doc_file_size"
    t.date     "doc_updated_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "protein_data", :force => true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "uni_prot_releases", :force => true do |t|
    t.string   "db_file_name"
    t.string   "db_content_type"
    t.integer  "db_file_size"
    t.string   "release_number"
    t.date     "release_date"
    t.string   "notes"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", :force => true do |t|
    t.string   "login"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
