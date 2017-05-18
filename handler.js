const AWS = require('aws-sdk')
const util = require('util')
const Promise = require('bluebird')

const s3 = new AWS.S3()
s3.getObject = Promise.promisify(s3.getObject)

module.exports.ingest = (event, context, callback) => {
  console.log("Event = " + util.inspect(event))

  const srcBucket = event.Records[0].s3.bucket.name
  const srcKey = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "))

  s3.getObject({
    Bucket: srcBucket,
    Key: srcKey
  }).then(res => res.Body)
    .then(body => {
      console.log("Content = " + body)

      callback(null, 'Successfully received data from S3')
    }).catch(err => {
      console.error(err)
      callback(err, `Failed with error: ${err}`)
    })
}
