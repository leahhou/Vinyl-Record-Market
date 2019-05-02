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
id = current_user.id
@user = User.find(id)
end

end
