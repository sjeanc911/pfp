class CreateAbstract < ActiveRecord::Migration
  def self.up
    create_table :abstracts do |t|
      t.string :content
      t.string :doc_file_name
      t.string :doc_content_type
      t.integer :doc_file_size
      t.date :doc_updated_at

      t.timestamps
    end
  end

  def self.down
    drop_table :abstracts
  end
end
