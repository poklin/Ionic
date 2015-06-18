var ionicPushServer = require('ionic-push-server');

var credentials = {
    IonicApplicationID : "13b6c18a",
    IonicApplicationAPIsecret : "94a353377e6e7a71999b15cd13956c9f7d06b66ba28fa14b"
};

var notification = {
  "tokens":["APA91bHCTIzlQr-BxxAjQBu8yy_QS3nMf2PNpthsC0lgP_dwfOYwJvpzxdwgaBioU38cJymc8962FenpIYHNguYv9AUXyoaafsyayPYLEAyymJtjfQMNlq8xzY2_zQPtvH_t_DFeieBuftL0e8mXVibZ2Onl9DHxVQ"],
  "notification":{
    "alert":"Hi from Ionic Push Service!",
    "ios":{
      "badge":1,
      "sound":"chime.aiff",
      "expiry": 1423238641,
      "priority": 10,
      "contentAvailable": true,
      "payload":{
        "key1":"value",
        "key2":"value"
      }
    }
  } 
};

ionicPushServer(credentials, notification);