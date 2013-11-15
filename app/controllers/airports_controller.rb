class AirportsController < ApplicationController
	respond_to :json

  def index
    respond_with Airport.all
  end

  def show
    @ap = Airport.find(params[:id])
    @ap[:destinations] = []
    # @dest = ['ATL','LAX','DWG']
    @dest = @ap.destinations

    @dest.each_with_index do |d,i|
      all  = AirportJoin.where({airport_id:@ap.id,destination_id:d.id})
      id = all.where({destination_id: 5})
      d[:assoc_id] = id
    end

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
