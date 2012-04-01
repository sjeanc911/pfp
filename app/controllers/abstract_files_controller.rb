#require Pfp::AbstractFiles

class AbstractFilesController < ActionController::Base

=begin
  if params has attachement
      save attachment
->      read attachment, save content into file content
  else
      save params into content
=end

  def create
    Pfp::AbstractFiles.add_abstract(params[:abstract])

    responds_to_parent do
      render :update do |page|
        page << "App.trigger('uploadAbstractDone');"
      end
    end
  end



end
