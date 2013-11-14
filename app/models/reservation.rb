class Reservation < ActiveRecord::Base
  attr_accessible :day, :destination, :origin, :time, :user
end
