class AirportJoin < ActiveRecord::Base

	belongs_to :airport , class_name: "Airport"
	belongs_to :destination , class_name: "Airport"


  	attr_accessible :airport_id, :destination_id
end
