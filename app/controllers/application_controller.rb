class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception, unless: -> { request.xhr? }
  protect_from_forgery with: :null_session, if: -> { request.xhr? }

  def index
    respond_to do |format|
      format.html { render 'shared/index' }
    end
  end
end
