class ToursController < ApplicationController



    def index
        @tours = Tour.all
    end

    def new
        @tour = Tour.new
    end

    def create
        @tour = Tour.new(tour_params)
        if @tour.save
            redirect_to tours_path 
        else
            render :new
        end
    end



    def show 


       @tour = Tour.find(params[:id])

        


    end









    private
  

    def tour_params
        params.require(:tour).permit(:name, :price, :duration, :accommodation, :meals, :entry_tickets, :pick_up, :transport, :description)
    end




end


