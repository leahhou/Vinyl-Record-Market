class UsersController < ApplicationController

def index 
@users = User.all
end 
def show 
# we probably don't need create @user as we can acces the info
#through current_user
id = params[:id]
@user = User.find(id)
end

def userprofile
    if current_user
        id = current_user.id
        @user = User.find(id)
    else 
        redirect_to new_user_session_path
    end
end

end
