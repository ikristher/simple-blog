class ArticlesController < ApplicationController
  include Response, ExceptionHandler
  before_action :set_article, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    @articles = Article.order(created_at: :desc).all
    json_response(@articles)
  end

  def update
    @article.update(items_params)
    json_response({message: 'Article Update'}, :accepted)
  end

  def create
    Article.create!(items_params)
    json_response({message: 'New Article Added'}, :created)
  end

  def destroy
    @article.delete
    json_response({message: 'Article Deleted'}, :accepted)

  end
  def items_params
    params.permit(:title, :content)
  end

  def show
    json_response(@article)
  end

  def set_article
    @article = Article.find(params[:id])
  end
end
