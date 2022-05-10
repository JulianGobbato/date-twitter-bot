const { TwitterApi } = require('twitter-api-v2')
const { appKey, appSecret, accessToken, accessSecret } = require('./env')

const client = new TwitterApi({
    appKey: appKey,
    appSecret: appSecret,
    accessToken: accessToken,
    accessSecret: accessSecret,
  });

async function postTw(img, text='') {
    const mediaId = await client.v1.uploadMedia(img);
    client.v2.tweet(text, {media: { media_ids: [mediaId]}} );
}

function loop(){
  setInterval(checkDate, 1000*60*60*24)
}

function checkDate(){

  let today = new Date
  if(today.getDay() == 1) { postTw('img/f6.jpg',); }
  if(today.getDay() == 3) {
    postTw('img/f5.jpg');
    postTw('img/f1.jpg');
  }
  if(today.getDay() == 4) { postTw('img/f2.jpg'); }
  if(today.getDay() == 5) { postTw('img/v1.mp4'); }
  if(today.getDate() == 2 && today.getMonth() == 1) { postTw('img/f4.jpg'); }
  if(today.getDate() == 14 && today.getMonth() == 3) { postTw('img/f11.jpg'); }
  if(today.getDate() == 15 && today.getMonth() == 3) { postTw('img/f10.jpg'); }
  if(today.getDate() == 2 && today.getMonth() == 5) { postTw('img/f3.jpg'); }
  if(today.getDate() == 5 && today.getMonth() == 5) { postTw('img/f14.jpg'); }
  if(today.getDate() == 25 && today.getMonth() == 5) { postTw('img/f8.jpg'); }
  if(today.getDate() == 10 && today.getMonth() == 8) { postTw('img/f12.jpg', 'Happy birthday Peter Parker'); }
  if(today.getDate() == 11 && today.getMonth() == 10) { postTw('img/f7.jpg'); }
  if(today.getDate() == 5 && today.getMonth() == 11) { postTw('img/f9.jpg'); }
  if(today.getDate() == 15 && today.getMonth() == 11) { postTw('img/f9.jpg'); }
}

loop()