module ExceptionHandler
    extend ActiveSupport::Concern
    include ActiveSupport::Rescuable

    class AuthenticationError < StandardError; end
    class MissingToken < StandardError; end
    class InvalidToken < StandardError; end

    included do
      rescue_from ActiveRecord::RecordInvalid, :with=> :unprocessable_entity
      rescue_from ExceptionHandler::AuthenticationError, :with=> :unauthorized_request
      rescue_from ExceptionHandler::MissingToken, :with=> :forbidden
      rescue_from ExceptionHandler::InvalidToken, :with=> :forbidden

      rescue_from ActiveRecord::RecordNotFound do |e|
        json_response({message: e.message}, :not_found)
      end

      rescue_from ActiveRecord::RecordInvalid do |e|
        json_response({message: e.message}, :unprocessable_entity)
      end
    end

    private

    def unprocessable_entity(e)
      json_response({ message: e.message }, :unprocessable_entity)
    end

    # JSON response with message; Status code 401 - Unauthorized
    def unauthorized_request(e)

      json_response({ message: 'Unauthorized' }, :unauthorized)
    end
    def forbidden(e)

      json_response({ message: 'You are not allowed to consume this resource' }, :forbidden)
    end
end
