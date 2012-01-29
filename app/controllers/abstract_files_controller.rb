class AbstractFilesController < ActionController::Base

  def create
    abstract = AbstractFile.create(params[:abstract_file])

    responds_to_parent do
      render :update do |page|
        page << "App.trigger('uploadAbstractDone');"
      end
    end
  end

end
