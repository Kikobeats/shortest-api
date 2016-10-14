'use strict'

const createClient = require('..')

const URL = 'https://kikobeats.com'
const SHORTEN_URL = 'http://sh.st/3s2xg'

const shortest = createClient({
  token: process.env.SHORTEST_TOKEN
})

describe('shortest-api', function () {
  it('short an URL', function (done) {
    shortest(URL, function (err, shortenURL) {
      shortenURL.should.be.equal(SHORTEN_URL)
      done(err)
    })
  })
})
