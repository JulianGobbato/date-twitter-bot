const { TwitterApi } = require('twitter-api-v2')
const { appKey, appSecret, accessToken, accessSecret } = require('./env')

const client = new TwitterApi({
    appKey: appKey,
    appSecret: appSecret,
    accessToken: accessToken,
    accessSecret: accessSecret,
  });

async function postTw() {
    const mediaId = await client.v1.uploadMedia('img/photo.jpg');
    client.v2.tweet('Hello, this is a test.', {media: { media_ids: [mediaId]}} );
}

postTw()
//function loop(){
//  setInterval(mandarMensaje, 1000)
//}
//
//loop()

//function checkDate(){
//  let urls = [];
//  let today = new Date
//  if(today.getDay() == 3){
//    urls.push('https://pbs.twimg.com/media/EMrbNaJXYAAuCgb.jpg')
//  }
//  if(today.getDay() == 5){
//    urls.push('')
//  }
//}
//
//checkDate()