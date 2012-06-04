class UniprotRelease < ActiveRecord::Base

  attr_accessor :uniprot_release

end

=begin
definition   :     UniProtRelease model is used when updating protein related database. Database updates will be downloaded from www.uniprot.org.
attributes    :     release number = UniProt release number as reported in the website
                        release date = Uniprot release date as reported in the website
                        db = file downloaded from the website, in tab or text form
see rake task update_uniprot_db

file format : *.tab, *.txt
=end
