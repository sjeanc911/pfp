module Pfp
  module AbstractFiles

    def  self.add_abstract(abstract)
      puts "workflow"
      puts abstract.inspect
      abstract = AbstractFile.create(abstract)
    end
  end

end

