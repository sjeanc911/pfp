class AbstractFile < ActiveRecord::Base

  has_attached_file :abstract,
  :url => ":rails_root/doc/abstract_files/:basename.:extension",
  :content_type => "text/plain",
  :path => ":rails_root/doc/abstract_files/:basename.:extension"

  validates_attachment_content_type :abstract, :content_type => "text/plain",
  :message => "should be text/plain files."

  attr_accessor :abstract
  def abstract
    @abstract
  end

  def abstract=(abstract)
    @abstract = abstract
  end

end
