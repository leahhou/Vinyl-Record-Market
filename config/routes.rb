Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/", to: "pages#home", as: "root"

  get "/listings", to: "listings#index", as: "listings"
  #route to hook 1st part of new form to create method"
  post "/listings", to: "listings#create"
  #route to hook 1st part of edit form to change method"
  put "/listings/edit/:id", to: "listings#change" 
  patch "/listings/edit/:id", to: "listings#change" 
  #route to show 1st part of the form when creating a new listing"
  get "/listings/new", to: "listings#new", as: "new_listing"
  #route to show 1st part of the form when editing an existing listing"
  get "/listings/:id/edit", to: "listings#edit", as: "edit_listing"
  # route to show 2nd part of the form"
  get "/listings/:id/more", to: "listings#more", as: "continue_listing"
  get "/listings/:id", to: "listings#show", as: "listing"
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

