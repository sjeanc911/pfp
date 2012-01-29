class StopWordsCollection < ActiveRecord::Base

  has_attached_file :stop_words,
  :url => ":rails_root/doc/stop_words/:basename.:extension",
  :content_type => 'text/plain',
  :path => ":rails_root/doc/stop_words/:basename.:extension"

  validates_attachment_content_type :stop_words, :content_type => 'text/plain',
  :message => "should be text/plain files."
end
