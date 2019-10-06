module RequestSpecHelper
  def json
    JSON.parse(response.body)
  end

  def valid_headers
    {
        "Authorization" => generate_token,
        "Content-Type" => "application/json"
    }
  end

  def invalid_headers
    {
        "Authorization" => generate_token(Time.now.to_i - 10),
        "Content-Type" => "application/json"
    }
  end

  private

  def generate_token(expire = 24.hours.from_now)
    JsonWebToken.encode({user_id: user.id}, expire)
  end
end