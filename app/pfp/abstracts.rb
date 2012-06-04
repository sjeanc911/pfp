module Pfp
  module Abstracts

    def  self.predict_abstract(abstract)
      if abstract[:doc]
        abstract = Abstract.create(abstract)
        Pfp::Abstracts.extract_abstract_content(abstract)
      else
        Abstract.create({:content => abstract[:content]})
      end

    end

    def self.extract_abstract_content(abstract)
      filename = abstract.doc.url.gsub(/\?.*/, "").strip
      content  = File.read(filename)
      abstract.set_content(content)
    end

  end

end

