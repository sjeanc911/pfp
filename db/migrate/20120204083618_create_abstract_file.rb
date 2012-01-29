class CreateAbstractFile < ActiveRecord::Migration
  def self.up
    create_table :abstract_files do |t|
      t.string :content
      t.string :abstract_file_name
      t.string :abstract_content_type
      t.integer :abstract_file_size
      t.date :abstract_updated_at

      t.timestamps
    end
  end

  def self.down
    drop_table :abstract_files
  end
end
