class GenresController < ApplicationController

    private

    def genres_params
      params.require(:genre).permit(listing_ids: [])
    end

end
