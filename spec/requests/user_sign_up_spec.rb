require 'rails_helper'
RSpec.describe 'User Sign-up API', type: :request do
  include RequestSpecHelper
  let!(:user) do
    { email: 'kristher.vidal@hotmail.com', name: 'Kristher', password:'123456'}
  end

  describe 'POST /account/register' do
    before { post '/account/register', params: user}
    it 'registers a new user' do
      expect(response).to have_http_status(:created)
      expect(json).not_to be_empty
      expect(User.all.count).to eq(1)
    end
  end
end