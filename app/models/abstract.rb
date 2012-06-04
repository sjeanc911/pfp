class Abstract < ActiveRecord::Base

  has_attached_file :doc,
  :url => ":rails_root/doc/abstracts/:basename.:extension",
  :content_type => "text/plain",
  :path => ":rails_root/doc/abstracts/:basename.:extension"

  validates_attachment_content_type :doc, :content_type => "text/plain",
  :message => "should be text/plain files."

  def set_content(content)
    self.content = content
    self.save!
  end


end
