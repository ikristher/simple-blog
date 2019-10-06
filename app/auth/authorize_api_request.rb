class AuthorizeApiRequest
  def initialize(headers = {})
    @headers = headers
  end

  def http_auth_header

    raise ExceptionHandler::MissingToken, 'No token is provided' unless @headers['Authorization'].present?

    @headers['Authorization'].split(' ').last
  end

  def user
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
    @user ||= User.find(@decoded_auth_token[:user_id])
    return @user
  end
end