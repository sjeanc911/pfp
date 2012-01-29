class CreateUniProtReleases < ActiveRecord::Migration
  def self.up
    create_table :uni_prot_releases do |t|
      t.string   :db_file_name
      t.string   :db_content_type
      t.integer :db_file_size
      t.date     :db_updated_at
      t.string   :release_number
      t.date     :release_date
      t.string  :notes
      t.timestamps
    end
  end

  def self.down
    drop_table :uni_prot_releases
  end
end
