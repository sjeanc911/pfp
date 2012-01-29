class UniProtRelease < ActiveRecord::Base

  has_attached_file :db,
                              :url => ":rails_root/doc/uni_prot_data/:basename.:extension",
                              :content_type => 'text/plain',
                              :path => ":rails_root/doc/uni_prot_data/:basename.:extension"

  validates_attachment_content_type :db, :content_type => 'text/plain',
                    :message => "should be text/plain files."

  attr_accessor :uni_prot_release
  def uni_prot_release
    @uni_prot_release
  end

  def uni_prot_release=(uni_prot_release)
    @uni_prot_release = uni_prot_release
  end
end

=begin
definition   :     UniProtRelease model is used when updating protein related database. Database updates will be downloaded from www.uniprot.org.
attributes    :     release number = UniProt release number as reported in the website
                        release date = Uniprot release date as reported in the website
                        db = file downloaded from the website, in tab or text form
                        notes = any additional notes as necessary
when downloading new database release :
query :

file format : *.tab, *.txt
=end
