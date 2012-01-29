class UniProtReleasesController < ActionController::Base

  def create
    new_release = UniProtRelease.create(params[:uni_prot_release])

    responds_to_parent do
      render :update do |page|
        page << "App.trigger('uploadDone');"
      end
    end

  end

end
