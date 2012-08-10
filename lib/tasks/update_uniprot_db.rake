=begin
file : DB in tab-delimited format
source : uniprot.org,  http://www.uniprot.org/uniprot/?query=existence%3a%22evidence+at+protein+level%22+AND+annotation%3a(type%3atransmem)&offset=25&sort=score
query customization, columns
  - Protein Names
  - General Annotation (Function)
  - Features
  - Sequence annotations (transmem)
  - Gene Ontology IDs
  - Gene Ontology (GO)

how to use:
rake update_uniprot_db release_number=2.21 release_date="06-05-2012" [file="doc/uniprot_db/db.csv"]
=end

desc "Update internal protein db with the latest Uniprot release."
task :update_uniprot_db => :environment do
  release_number = ENV["release_number"]
  release_date = ENV["release_date"]
  file = ENV["file"] || "#{Rails.root}/doc/uniprot_db/try.tab"

  if release_number.blank? || release_date.blank?
    puts "Error. incomplete details!"
  else
    # process here
    # see pfp/abstracts.rb re files
    Pfp::Uniprot.update_db(file)
  end

end
