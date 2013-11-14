class FlightsController < ApplicationController
	respond_to :json

  def index
    respond_with Flight.all
  end

  def show
    respond_with Flight.find(params[:id])
  end

  def create
    respond_with Flight.create(params[:flight])
  end

  def update
    respond_with Flight.update(params[:id], params[:flight])
  end

  def destroy
    respond_with Flight.destroy(params[:id])
  end
end
