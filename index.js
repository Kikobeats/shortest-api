'use strict'

const get = require('simple-get')

function createClient (opts) {
  if (!opts.token) throw new TypeError('Need to provide your shorte.st token.')

  const params = {
    method: 'PUT',
    url: 'https://api.shorte.st/v1/data/url',
    headers: { 'public-api-token': opts.token },
    form: { urlToShorten: null },
    json: true
  }

  function client (url, cb) {
    if (!url) return cb(new TypeError('Need to provide a valid url.'))
    params.form.urlToShorten = url
    get.concat(params, function (err, res, data) {
      if (err) return cb(err, data)
      if (!data || data.status !== 'ok' || !data.shortenedUrl) return cb(new Error('Invalid Shorte.st response'), data)
      return cb(null, data.shortenedUrl)
    })
  }

  return client
}

module.exports = createClient
