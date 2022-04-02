class SitesController < ApplicationController
    before_action :authenticate_user!
    before_action :set_tour, only: %i[create edit update destroy]

    def create   
        @site = @tour.sites.create(site_params)

        if @site.save
            redirect_to @tour
        end
    end

    def edit 
        @site = @tour.sites.find(params[:id])
    end

    def update
        @site = @tour.sites.find(params[:id])
        @site.update(site_params)
        redirect_to @tour
    end

    def destroy
        @site = @tour.sites.find(params[:id])
        @site.destroy   
        redirect_to @tour
    end

    private

    def set_tour
        @tour = Tour.find(params[:tour_id])
    end

    def site_params
        params.require(:site).permit(:name, :description)
    end
end
