class PaymentsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:stripe]
    
    def stripe
        user_id = params[:data][:object][:client_reference_id] #Referencing perchaser (USER)
        payment_id =  params[:data][:object][:payment_intent]  #Referencing the payment ID 
        payment = Stripe::PaymentIntent.retrieve(payment_id)
        listing_id = payment.metadata.listing_id
        #Garret Knows Cool shit
        p "listing id " + listing_id
        p "user id " + user_id
        render json: ""
    end

    def success

    end
end