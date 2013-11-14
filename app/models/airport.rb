class Airport < ActiveRecord::Base
  attr_accessible :city, :code, :destinations, :name
end
