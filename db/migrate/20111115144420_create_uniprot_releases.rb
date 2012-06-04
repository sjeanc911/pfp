class CreateUniprotReleases < ActiveRecord::Migration
  def self.up
    create_table :uniprot_releases do |t|
      t.string   :file_name
      t.string   :release_number
      t.date     :release_date
      t.string  :notes
      t.timestamps
    end
  end

  def self.down
    drop_table :uniprot_releases
  end
end
