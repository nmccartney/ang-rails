class AirportsController < ApplicationController
	respond_to :json

  def index
    respond_with Airport.all
  end

  def show
    @ap = Airport.find(params[:id])
    @ap[:destinations] = []
    @dest = ['ATL','LAX','DWG']
    @ap[:destinations] << @dest
    respond_with @ap
  end

  def create
    respond_with Airport.create(params[:airport])
  end

  def update
    respond_with Airport.update(params[:id], params[:airport])
  end

  def destroy
    respond_with Airport.destroy(params[:id])
  end
end
