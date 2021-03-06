require 'rails_helper'

RSpec.describe 'Articles API', type: :request do
  include RequestSpecHelper
  let!(:articles) { create_list(:article, 10) }
  let(:article_id) { articles.first.id }
  let(:user) { create(:user) }
  let(:headers) { valid_headers }
  let(:article) do
    { title:'this is another article', content:'I am simple content for your enjoyment' }.to_json
  end
  describe 'GET /articles' do
    before { get '/articles' }

    it 'returns articles' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
      expect(response).to have_http_status (:ok)
    end
  end

  describe 'GET /articles/:id' do
    before { get "/articles/#{article_id}" }

    it 'returns the first article' do
      expect(json).not_to be_empty
      expect(json['id']).to eq(article_id)
      expect(response).to have_http_status (:ok)
    end
  end

  describe 'PUT /articles/:id' do
    let!(:edit_article) do
      {title: "this is a new title for the article"}.to_json
    end
    before { put '/articles/' + article_id.to_s, params: edit_article, headers: headers }
    context 'when the record exists' do
      it 'updates the first article' do
        expect(response).to have_http_status(:accepted)
      end
      it 'fetched article should have the new title' do
        puts articles.class
        expect(Article.find(article_id).title).to eq('this is a new title for the article')
      end

    end
  end

  describe 'POST /articles' do

    before { post '/articles', params: article, headers: headers }
    it 'adds new article in the database' do
      expect(response).to have_http_status(:created)
    end
    it 'the total articles will be eleven' do
      expect(Article.count).to eq(11)
    end
  end
  describe 'DELETE /articles/:id' do
    before { delete '/articles/' + article_id.to_s, headers: headers }
    it 'deletes article from the database' do
      expect(response).to have_http_status(:accepted)
    end

    it 'deleted article will not be found on the database' do
      expect { Article.find(article_id) }.to raise_exception ActiveRecord::RecordNotFound
    end
  end

  describe 'GET /articles/:invalid_id' do
    before { get '/articles/100' }
    it 'it returns 404 when fetching an invalid article' do
      expect(response).to have_http_status(:not_found)
    end

  end
end