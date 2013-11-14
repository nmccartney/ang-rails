class Reservation < ActiveRecord::Base
  attr_accessible :day, :origin, :time, :user, :destination
end
