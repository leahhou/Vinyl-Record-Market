module ApplicationHelper

    def listing_owner?(listing)
        user_signed_in? and current_user.id == listing.user_id
    end

end
