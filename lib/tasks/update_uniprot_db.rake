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
=end

desc "Update internal protein db with the latest Uniprot release."
task :update_uniprot_db => :environment do
  release_number = ENV["release_number"]
  release_date = ENV["release_date"]
  file = ENV["file"] || "#{RAILS_ROOT}/doc/uniprot_db/*.*"

  if release_number.blank? || release_date.blank?
    puts "Error. incomplete details!"
  else
    # process here
    # see pfp/abstracts.rb re files
  end


end
