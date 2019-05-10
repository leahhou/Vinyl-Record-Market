class UsersController < ApplicationController
before_action :set_user, only: [:show]
before_action :set_user_listings, only: [:show]
def index   
@users = User.all

@q = User.ransack(params[:q])
@results = @q.result(distinct: true)
end 

def show 
end

def userprofile
    if current_user
        id = current_user.id
        @user = User.find(id)
        set_user_listings
    else 
        redirect_to new_user_session_path
    end

    @user_listings = current_user.listings
     
    # Bruce to work on
    #for i in Purchase.listing_id
    #@user_listings_sold = Purchase.listing_id
end

def favorites
    if current_user
        @favorite_listings = current_user.favorite_listings
    else 
        redirect_to new_user_session_path
    end 
end 

private
def set_user
    id = params[:id]
    @user = User.find(id)
end

def set_user_listings
    @user_listings = @user.listings
end

end
