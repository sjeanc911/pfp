class CreateAbstractFile < ActiveRecord::Migration
  def self.up
    create_table :abstract_files do |t|
      t.string :content
      t.string :doc_file_name
      t.string :doc_content_type
      t.integer :doc_file_size
      t.date :doc_updated_at

      t.timestamps
    end
  end

  def self.down
    drop_table :abstract_files
  end
end
