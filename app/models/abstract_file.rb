class AbstractFile < ActiveRecord::Base

  has_attached_file :doc,
  :url => ":rails_root/doc/abstract_files/:basename.:extension",
  :content_type => "text/plain",
  :path => ":rails_root/doc/abstract_files/:basename.:extension"

  validates_attachment_content_type :doc, :content_type => "text/plain",
  :message => "should be text/plain files."

  attr_accessor :abstract_content
  def abstract_content
    @abstract
  end

  def abstract_content=(abstract)
    @abstract = abstract
  end

end
