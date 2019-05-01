class ListingsController < ApplicationController
before_action :set_genre_format_and_condition, only: [:new, :edit]

    def index 
        #shows all listings
    end

    def create 
        #create new listing
    end  

    def new 
        #shows form for creating a new listing
        @listing = Listing.new
    end  

    def show 
        #view a single listing
    end  

    def update 
        #updates the current listing
    end

    def edit 
        #show the edit form 
    end  

    def destroy 
        #deletes current listings
    end  
        
    private
    def set_listing
        id = params[:id]
        @listing = Listing.find(id)
    end  

    def set_genre_format_and_condition
        @genres = Genre.all
        @formats = Format.all
        @conditions = Listing.conditions.keys
    end
end
