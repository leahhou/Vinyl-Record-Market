class PagesController < ApplicationController

  def home 

    @most_liked_listings = Listing.all.sort_by {|listing| listing.favorite_count}.last(6).reverse
    @home_listings = Listing.last(6).reverse
  

# Needs to be assessed. If nothing is returned, then remove + " (band)"
    listing_selection = @most_liked_listings.map {|listing| listing.id}                  #random number from 1 to listings count
    @home_listings.each { |listing| listing_selection << listing.id }
    random_listing_number= listing_selection.sample
    artist = Listing.find(random_listing_number).artist + " (band)" #include " (band)" to avoid Muse and birthday party issue 
    @page = Wikipedia.find artist                                   #Init @page as the wiki page for the artist
      
    if @page.categories == nil                                      #If the page does not exist then do this
      artist = Listing.find(random_listing_number).artist           #Include the Muse and Birthday party problems
      @page = Wikipedia.find artist                                 #Init @page as the wiki page for the artist
    end
    @artist_image_url = @page.main_image_url
   end 




end
