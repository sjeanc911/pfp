module Pfp::AbstractFiles

=begin
  how to load this

=end
  def  self.add_abstract(abstract)
    abstract = AbstractFile.create(abstract)
  end

end
