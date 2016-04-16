var express               = require('express'),
    app                   = express(),
    redis                 = require('redis'),
    url                   = require('url'),
    emberDeploy           = require('node-ember-cli-deploy-redis'),
    client                = require("redis").createClient(process.env.REDIS_PORT, process.env.REDIS_HOST),
    forceSsl              = require('force-ssl-heroku');
    EMBER_APP_NAME        = 'dinosaurJS';

// Authorize our Redis Client -- could parse the password out of the redis url
// but I made it a little bit more surefire (wasnt liking it) and made it a heroku env var
client.auth(process.env.REDIS_PASS);

app.set('port', (process.env.PORT || 5000));

app.use(forceSsl);
app.use(express.static(__dirname + '/public'));

app.use('/*', emberDeploy('dinosaurJS:index', {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASS}));

// app.get('/ping', pingHandler);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
