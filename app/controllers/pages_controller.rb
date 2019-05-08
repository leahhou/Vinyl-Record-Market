class PagesController < ApplicationController

      def home 
        @most_liked_listings = Listing.all.sort_by {|listing| listing.favorite_count}.last(3).reverse
        @home_listings = Listing.last(3).reverse
      end

end
