Entry.create!(name: 'nate')
Entry.create!(name: 'chelsey')
Entry.create!(name: 'Matz')


Airport.create!(code: "ATL", name:"Hartsfield Jackson Atlanta International Airport", city: "Atlanta")
Airport.create!(code: "ORD", name:"O'Hare International Airport", city: "Chicago")
Airport.create!(code: "LAX", name:"Los Angeles International Airport", city: "Los Angeles")
Airport.create!(code: "DFW", name:"Dallas/Fort Worth International Airport", city: "Dallas")

Airport.create!(code: "DEN", name:"Denver International Airport", city: "Denver")
Airport.create!(code: "JFK", name:"John F. Kennedy International Airport", city: "New York")
Airport.create!(code: "SFO", name:"San Francisco International Airport", city: "San Francisco")
Airport.create!(code: "LAS", name:"McCarran International Airport", city: "Las Vegas")
Airport.create!(code: "PIT", name:"Pittsburgh International Airport", city: "Pittsburgh")

Flight.create!(number: '112', origin: "ATL", destination: "DFW", price: "232")
Flight.create!(number: '123', origin: "LAX", destination: "ORD", price: "114")
Flight.create!(number: '163', origin: "DFW", destination: "LAX", price: "223")

Reservation.create!(origin:":LAX",destination:"ORD")
Reservation.create!(origin:":ATL",destination:"DFW")

AirportJoin.create!(airport_id: 1, destination_id: 2)
AirportJoin.create!(airport_id: 1, destination_id: 3)
AirportJoin.create!(airport_id: 2, destination_id: 1)
AirportJoin.create!(airport_id: 2, destination_id: 3)