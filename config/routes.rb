Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get "/", to: "pages#home", as: "root"
  resource :listings
  get "/listings", to: "listings#index", as: "alllistings"

end
