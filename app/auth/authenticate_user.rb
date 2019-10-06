class AuthenticateUser
  # include ExceptionHandler
  def initialize(email, password)
    @email = email
    @password = password
  end

  attr_reader :email, :password
  def authenticate
    user = User.find_by(email:email)
    throw ExceptionHandler::AuthenticationError unless user && user.authenticate(@password)

    return JsonWebToken.encode(user_id: user.id)
  end
end