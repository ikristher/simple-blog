require 'rails_helper'

RSpec.describe 'Authenticate API', type: :request do
  include RequestSpecHelper
  let!(:user) { create(:user)}
  describe 'POST /account/login' do
    before { post '/account/login', params: {email: user.email, password: '123456'}}

    it 'returns a valid JWT token' do
      expect(json).not_to be_empty
      expect(response).to have_http_status (:ok)
      decode_user = JsonWebToken.decode(json['token'])
      expect(decode_user['user_id']).to eq(user.id)
    end
  end
end