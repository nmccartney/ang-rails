class Flight < ActiveRecord::Base
  attr_accessible :destination, :number, :origin, :price
end
