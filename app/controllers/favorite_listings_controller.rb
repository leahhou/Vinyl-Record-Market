class FavoriteListingsController < ApplicationController
    before_action :set_listing
    
    def create
      if Favorite.create(favorited: @listing, user: current_user)
        @listing.favorite_count += 1 
        redirect_to @listing, notice: 'Listing has been favorited'
      else
        redirect_to @listing, alert: 'Something went wrong...*sad panda*'
      end
    end
    
    def destroy
      Favorite.where(favorited_id: @listing.id, user_id: current_user.id).first.destroy
      @listing.favorite_count -= 1 
      redirect_to @listing, notice: 'Listing removed from favourites'
    end
    
    private
    
    def set_listing
      @listing = Listing.find(params[:listing_id] || params[:id])
    end
  end