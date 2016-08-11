Rails.application.routes.draw do
  get 'user/:id' => 'users#show'
  get "users" => "users#index"
  root to: 'application#index'
end
