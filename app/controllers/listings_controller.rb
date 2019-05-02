class ListingsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :set_listing, only: [:show, :edit, :update, :destroy]   
    before_action :authorize_user, only: [:edit, :update, :destroy] 
    before_action :set_genre_format_and_condition, only: [:new, :edit]


    def index 
        #shows all listings
        @listings = Listing.all
    end

    def create 
        #create new listing
        p "good morning #{params[:genre_id]}"
        @listing = current_user.listings.create(listing_params)
        p @listing.price

        if @listing.errors.any?
            set_genre_format_and_condition
            render "new"
        else
            redirect_to listing_path(@listing.id)
        end
    end  

    def new 
        #shows form for creating a new listing
        @listing = Listing.new
    end  

    def show
        @listing[:price]= @listing[:price]*100
    stripe_session = Stripe::Checkout::Session.create(
        payment_method_types: ['card'],
        line_items: [{
        amount: @listing.price,
        name: @listing.title,                          #Edit this to include more information fields
        description: @listing.description,
        currency: 'aud',
        quantity: 1,
        }],
        success_url: 'https://localhost:3000/success', #Needs to be changed before Heroku
        cancel_url: 'https://localhost:3000/cancel',   #Needs to be changed before Heroku
    ) 
    @stripe_session_id = stripe_session.id
    #view a single listing    
    end  

    def update 
        #updates the current listing
        @listing = current_user.listings.find(params[:id])
        @listing.update(listins_params)
        redirect_to listing_path(@listing.id)
    end

    def edit 
        #show the edit form 
    end  

    def destroy 
        #deletes current listings
        @listing.destroy
        redirect_to listing_path
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

    def authorize_user
        if @listing.user_id != current_user.id
            redirect_to listings_path
        end
    end

    def listing_params
        params.require(:listing).permit(:artist, :title, :year, :format_id, :price, :condition, :description, :genre_id => [])
    end

end
