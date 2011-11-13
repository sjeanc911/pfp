class UniProtRelease < ActiveRecord::Base

  has_attached_file :db,
                              :url => "doc/uni_prot_data/:basename.:extension",
                              :content_type => 'text/plain',
                              :path => ":rails_root/doc/uni_prot_data/:basename.:extension"

  validates_attachment_content_type :db, :content_type => 'text/plain',
                    :message => " should be text/plain files."

  attr_accessor :uni_prot_release
  def uni_prot_release
    @uni_prot_release
  end

  def uni_prot_release=(uni_prot_release)
    @uni_prot_release = uni_prot_release
  end
end
