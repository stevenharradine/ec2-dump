#!/usr/bin/node
var data = require("./" + process.argv[2] + ".json")

data.Reservations.forEach (function (reservation) {
	reservation.Instances.forEach (function (instance) {
		console.log (instance.InstanceId + ", " + instance.PublicIpAddress)
	})
})
