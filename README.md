#### Roughly how this was setup
generate blank node express app:
`express myapp`

Update app.js file

add cheerio, ejs, express, 'node-ember-cli-deploy-redis’ and ‘redis’ to package.json

`git init`

`git add -A`

`git commit -m ‘first commit’`

`git push origin master`

heroku create aventura-deploy-server

`git push heroku master`

Make sure its only 1 dyno

`heroku ps:scale web=1`

Setup redis-to-go

`heroku addons:create redistogo`

Get your redis url

` heroku config | grep REDISTOGO_URL`

(can use —app option for specifying app like this ` heroku config —app aventura-deploy-server | grep REDISTOGO_URL`  but not needed)
Redis url will be needed later for the ember-cli-deploy setup

Set our config variables on heroku so that it can talk to S3 and redis

`heroku config:set REDIS_HOST=gar.redistogo.com`

`heroku config:set REDIS_PASS= garblygooppasslookitupurself`

`heroku config:set REDIS_PORT=10270`

`heroku config:set S3_SECRET=shhhsecretlookitup`

`heroku config:set AWS_KEY=garblygoopkeylookitupurself`
