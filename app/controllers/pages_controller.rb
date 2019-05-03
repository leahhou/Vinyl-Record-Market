class PagesController < ApplicationController

      def home 
        @home_listings = Listing.last(3)
      end
end
