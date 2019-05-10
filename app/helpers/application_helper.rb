module ApplicationHelper

    def listing_owner?(listing)
        user_signed_in? and current_user.id == listing.user_id
    end

    def return_avatar(user)
        if user.avatar.attached?
            return user.avatar
        else
            return "blank.jpg"
        end
    end 

    def return_cover(listing)
        if listing.cover.attached?
            return listing.cover
        else
            return 'coverart.jpg'
        end
    end 

end
