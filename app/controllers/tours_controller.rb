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
            redirect_to tours_path, notice: "Tour saved successufully" 
        else
            render :new
        end
    end

    def show 
       @tour = Tour.find(params[:id])
    end

    def edit 
        @tour = Tour.find(params[:id])
    end 

    def update
        @tour = Tour.find(params[:id])
        @tour.update(tour_params)
        redirect_to @tour, notice: "Tour updated sucessfully"
    end

    def destroy
        @tour = Tour.find(params[:id])
        @tour.destroy
        redirect_to root_path, notice: "Tour deleted successfully"
    end

    private
  
    def tour_params
        params.require(:tour).permit(:name, :price, :duration, :accommodation, :meals, :entry_tickets, :pick_up, :transport, :description, :image)
    end

end


