class UsersController < ApplicationController
before_action :set_user, only: [:show]
before_action :set_user_listings, only: [:show]
def index 
@users = User.all
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
