class ReservationsController < ApplicationController
	respond_to :json

  def index
    respond_with Reservation.all
  end

  def show
    respond_with Reservation.find(params[:id])
  end

  def create
    respond_with Reservation.create(params[:reservation])
  end

  def update
    respond_with Reservation.update(params[:id], params[:reservation])
  end

  def destroy
    respond_with Reservation.destroy(params[:id])
  end
end
