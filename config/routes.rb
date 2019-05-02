Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/", to: "pages#home", as: "root"

  get "/listings", to: "listings#index", as: "listings"
  post "/listings", to: "listings#create"
  get "/listings/new", to: "listings#new", as: "new_listing"
  get "/listings/:id", to: "listings#show", as: "listing"
  get "/listings/:id/edit", to: "listings#edit", as: "edit_listing"
  get "/listings/:id/more", to: "listings#more"
  put "/listings/:id", to: "listings#update"
  patch "/listings/:id", to: "listings#update"
  delete "/listings/:id", to: "listings#destroy"

  get "/users", to: "users#index", as: "users"

  post "/payments", to: "payments#stripe"
  get "/payments/success", to: "payments#success"
  # add user prefix to direct to individual profile
  get "users/my_profile", to: "users#userprofile", as: "my_profile"
  get "/users/:id", to: "users#show", as: "user"
  
  
end

