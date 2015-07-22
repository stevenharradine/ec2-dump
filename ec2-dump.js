var ENVIROMENT_AWS_REGION_MAP = require("./enviromentAwsRegionMap.json"),
    AWS                       = require("aws-sdk"),
    fs                        = require("fs"),
    enviroment                = process.argv[2]

AWS.config.region = ENVIROMENT_AWS_REGION_MAP[enviroment]

getInstancesFromAws ( function (instances) {
  saveJsonToFile (enviroment + ".json", instances)
})

function getInstancesFromAws (callback) {
  var instances = Array ()

  new AWS.EC2().describeInstances(function(error, data) {
    if (error) {
      console.log(error)
    } else {
      callback (data)
    }
  })
}

function saveJsonToFile (filename, data) {
  fs.writeFile(filename, JSON.stringify(data), function(err) {
    if(err) {
      console.log(err)
    } else {
      console.log("JSON saved to " + filename)
    }
  })
}