class ListingsController < ApplicationController
    before_action :set_listing, only: [:show, :edit, :update, :destroy]    
    before_action :set_genre_format_and_condition, only: [:new, :edit]


    def index 
        #shows all listings
        @listings = Listing.all
    end

    def create 
        #create new listing
        p current_user
        @listing = Listing.create(listing_params)
        if @listing.errors.any?
            set_genre_format_and_condition
            render "new"
        else
            redirect_to listing_path
        end
        
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
        @listing = Listing.find(params[:id])
        @listing.update(artist: params[:artist],
        title: params[:title],
        format_id: params[:format_id],
        year: params[:year],
        price: params[:price],
        condition: params[:condition],
        description: params[:description]

        )
        redirect_to listings_path
    end

    def edit 
        #show the edit form 
    end  

    def destroy 
        #deletes current listings
        @listing.destroy
        redirect_to listings_path
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

    def listing_params
        params.require(:listing).permit(:artist, :title, :year, :format_id, :price, :condition, :description)
    end
end
