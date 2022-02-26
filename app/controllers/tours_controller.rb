class ToursController < ApplicationController

    before_action :authenticate_user!, except: [:index, :show]
    before_action :set_tour, only: %i[show edit destroy update]  

    def index
        @tours = Tour.all
    end

    def new
        @tour = current_user.tours.build
    end

    def create
        @tour = current_user.tours.build(tour_params)
        if @tour.save
            redirect_to tours_path, notice: "Tour saved successufully" 
        else
            render :new
        end
    end

    def show 

    end

    def edit 
    end 

    def update
        @tour.update(tour_params)
        redirect_to @tour, notice: "Tour updated sucessfully"
    end

    def destroy
        @tour.destroy
        redirect_to root_path, notice: "Tour deleted successfully"
    end




    private

    def set_tour 

        @tour = Tour.find(params[:id])
    end
  
    def tour_params
        params.require(:tour).permit(:name, :price, :duration, :accommodation, :meals, :entry_tickets, :pick_up, :transport, :description, :image)
    end

end


