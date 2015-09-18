var data = require("./" + process.argv[2] + ".json")

for (i in data.Reservations) {
  for (j in data.Reservations[i].Instances) {
    var tagFound = false

    for (k in data.Reservations[i].Instances[j].Tags) {
      if (data.Reservations[i].Instances[j].Tags[k].Key == process.argv[3]) {
        tagFound = true
      }
    }

    if (!tagFound) {
      for (l in data.Reservations[i].Instances[j].Tags) {
        if (data.Reservations[i].Instances[j].Tags[l].Key == "Name") {
          console.log (data.Reservations[i].Instances[j].Tags[l].Value)
        }
      }
    }
  }
}
