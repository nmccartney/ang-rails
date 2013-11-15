class AirportJoinsController < ApplicationController
	respond_to :json
  def index
    respond_with AirportJoin.all
  end

  def show
    respond_with AirportJoin.find(params[:id])
  end

  def create
    respond_with AirportJoin.create(params[:airport_join])
  end

  def update
    respond_with AirportJoin.update(params[:id], params[:airport_join])
  end

  def destroy
    respond_with AirportJoin.destroy(params[:id])
  end
end
