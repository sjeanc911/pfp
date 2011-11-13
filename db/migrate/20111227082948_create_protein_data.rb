class CreateProteinData < ActiveRecord::Migration
  def self.up
    create_table :protein_data do |t|

      t.timestamps
    end
  end

  def self.down
    drop_table :protein_data
  end
end
