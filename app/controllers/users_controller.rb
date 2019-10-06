class UsersController < ApplicationController
  include ExceptionHandler, Response

  def store
    user = User.create!(items_params)

    json_response({message: 'User Registered', token: JsonWebToken.encode(user_id: user.id)},:created)
  end
  def items_params
    params.permit(:email, :password, :name )
  end
end
