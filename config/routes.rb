Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :articles do
  end

  post '/account/login',to: 'authenticate#store'
  post '/account/register',to: 'users#store'
end
