
class AuthenticateController < ApplicationController
  include Response, ExceptionHandler

  def store
    auth = AuthenticateUser.new(params[:email], params[:password])
    token = auth.authenticate()
    return json_response( { token:token })

  end

end
