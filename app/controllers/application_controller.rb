class ApplicationController < ActionController::API
  attr_reader :current_user
  def authorize_request
    @current_user = AuthorizeApiRequest.new(request.headers).user
  end
end
