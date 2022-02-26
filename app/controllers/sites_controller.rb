class SitesController < ApplicationController

    before_action :authenticate_user!


    def create   
        @tour = Tour.find(params[:tour_id])
        @site = @tour.sites.create(site_params)

        if @site.save
            redirect_to @tour
        end

    end

    def edit 
        @tour = Tour.find(params[:tour_id])
        @site = @tour.sites.find(params[:id])
    end

    def update
        @tour = Tour.find(params[:tour_id])
        @site = @tour.sites.find(params[:id])
        @site.update(site_params)
        redirect_to @tour
    end

    def destroy
        @tour = Tour.find(params[:tour_id])
        @site = @tour.sites.find(params[:id])
        @site.destroy   
        redirect_to @tour
    end




    private

    def site_params
        params.require(:site).permit(:name, :description)
    end

end
