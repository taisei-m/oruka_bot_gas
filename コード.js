//
//
////linebotと繋ぐ
//var CHANNEL_ACCESS_TOKEN = 'qn7G7ooyPk14r+ccerwuokY/Eh44dbrCCh18x+sTowsK+FCIEE1wYQcCaZ3+a8+oPtlsgO6GooYWRM0LbLQy5IWajmvbMIioUoGG+Uar91mMNd+EW+q7hDVS29UjbTyBdMtBi1u4YInQO7+2q2B0VwdB04t89/1O/w1cDnyilFU='; 
//
////spreadsheetsにjsonのログをとる
//function outputLog(data) {
//  var id = "1JqCp_y7eOn6e4QPlGbCXHIPnsrvU0EUE2-_-MFTmNXw";  
//  var spreadSheet = SpreadsheetApp.openById(id);  
//  var sheetName = "シート1";
//  spreadSheet.getSheetByName(sheetName).appendRow(
//    [new Date(), data]
//  );
//}
//
//
//
////ニフクラの設定
//var application_key = "b472d2ab52ea8c125dd824e2f2da7a3804263d15dd8ae9c2abfab01546e2ca4c";
//var client_key = "1c6e63f8db4776114481fbc1129ab2cc59f3bf0e2faa1d0eb48e83be32cbf1d6";
//var ncmb = NCMB.init(application_key, client_key);
//var Test = ncmb.DataStore("test");
//var Master = ncmb.DataStore("master");
//var Person = ncmb.DataStore("person");
//var Person_log = ncmb.DataStore("person_log");
//var master = new Master();
//var person = new Person();
//var person_log = new Person_log();
//
// 
//
//function doPost(e) {
//    // outputLog(JSON.stringify(e))
//  var json = JSON.parse(e.postData.contents);
//  var reply_token = json.events[0].replyToken;
//  var userId = json.events[0].source.userId;
//  if (typeof reply_token === 'undefined') {
//    return;
//  } 
//    
//  
//  var type = json.events[0].type;
//     outputLog(type);
//  var reply_message;
//  var keyword;
//  var beacon_hwid;
//  var display_name;
//  var check_hwid;   ////DBから持ってきたhwid
//  var check_keyword;////DBから持ってきたキーワード
//  var wifi_paswd;
//  var waiting_msg;
//  var reply_message;
//  var reply_message_paswd;
//  var reply_message_good;
//  var m1;
//  var m2;
//  var m3;
//  var m4;
//  
//    if(type == 'beacon'){
//      /*
//      var urlprofile = 'https://api.line.me/v2/bot/profile/' + '{' + userId + '}';
//   return UrlFetchApp.fetch(urlprofile, {
//    'headers': {
//    'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
//    },
//    }),
//   */
//   
//      
//     beacon_hwid = json.events[0].beacon.hwid;
//     
//      //outputLog(userId);
//     display_name = getUserDisplayName(userId, CHANNEL_ACCESS_TOKEN);
//         
//        // outputLog("userId=" + userId);
//        // outputLog("beacon_hwid=" + beacon_hwid);
//      set_beacon_data(beacon_hwid, userId, display_name);
//      //outputLog("クリア");
//      sleep = get_sleep(userId);
//        // outputLog("sleep=" + sleep);
//       
//      set_beacon_data_log(beacon_hwid, userId, display_name); 
//         
//      push_userId = "U2012df34792adf4ce94b2b36d669bd59"
////    if(userId != push_userId){
////        var fool_name = get_fool_name(userId);
////        //    outputLog(fool_name);
////        var fool_hwid = get_hwid_by_userId(userId);
////        //    outputLog(fool_hwid);
////        var good_where = get_good_where(fool_hwid);
////        //    outputLog(good_where);
////        var fool_date = get_date(userId);
////        //    outputLog(fool_date);
////        push_message = fool_date + " " + display_name + " [" + fool_name + "] " + "は" + good_where + "にいるよ☆"
////        //    outputLog(push_message); 
////        
////  var url = 'https://api.line.me/v2/bot/message/push';
////    UrlFetchApp.fetch(url, {
////    'headers': {
////      'Content-Type': 'application/json; charset=UTF-8',
////      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
////    },
////    'method': 'post',
////    'payload': JSON.stringify({
////      'to': f_userId,
////      'messages': [
////        {'type': 'text',
////         'text': push_message,},
////      ],
////    }),
////  });
////      }  
//      if(sleep == "false"){
//      reply_message = 'ビーコンに反応したよ';
//       var url = 'https://api.line.me/v2/bot/message/reply';
//  return UrlFetchApp.fetch(url, {
//    'headers': {
//      'Content-Type': 'application/json; charset=UTF-8',
//      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
//    },
//    'method': 'post',
//    'payload': JSON.stringify({
//      'replyToken': reply_token,
//      'messages': [
//        {'type': 'text',
//         'text': reply_message,},
//      ],
//    }),
//  });
//     }
//  
//        
//      
//       
//      
//        
//        
//      
//      //////////////////////////////////////////////////////////////////////////////postback
//    } else if(type == "postback"){ 
//    
//        postbackdata = json.events[0].postback.data;
//     //   outputLog(postbackdata);
//     //   outputLog(userId);
//      if(postbackdata == "うるさい"){
//        set_sleep(userId, "true");
//        set_sleep_log(userId, "true", keyword);
//        　　　　m1 = "”通知OFF”にしました";
//     //   outputLog(m1);
//         reply1(CHANNEL_ACCESS_TOKEN, reply_token, m1);
//      } else if(postbackdata == "起きて"){
//        set_sleep(userId, "false");
//        set_sleep_log(userId, "false", keyword);
//        　　　　 m1 = "”通知ON”にしました";
//        　　　　 m2 = "ビーコンに反応するとメッセージで通知します"
//      //    outputLog(m1) ;
//              reply2(CHANNEL_ACCESS_TOKEN, reply_token, m1, m2);
//      } else if (postbackdata == "反応がない"){
//    　　　      m1 = "合言葉を入力する前にビーコンに反応している必要があります。";
//               m2 = "反応させる方法がわからない場合は「メニュー」→「使いかた」→”ビーコンに反応しない”を押してください。";
//              reply2(CHANNEL_ACCESS_TOKEN, reply_token, m1, m2);
//      } else if (postbackdata == "違うといわれる"){
//              m1 = "今あなたがいる施設のビーコンに反応していない可能性があります。";
//              m2 = "メニューから”SSID表示”のボタンを押して施設名が正しいか確認してください。";
//              m3 = "施設名が違う場合, 反応がない場合は今いる施設のビーコンに反応していません。";
//             reply3(CHANNEL_ACCESS_TOKEN, reply_token, m1, m2, m3)
//      } else if (postbackdata == "ビーコンに反応しない"){
//              m1 = "通知設定から通知をonにすると、ビーコンに反応した時メッセージが送信されます。";
//              m2 = "LINEの \"設定\"＞\"プライバシー管理\"＞\"情報の提供\" にある \"LINE beacon\"にチェックは入っていますか？";
//              m3 = "端末のBluetoothはオンになっていますか？ Bluetoothのon/offを繰り返してみてください。";
//              m4 = "それでも反応しない場合、お使いの端末ではLINEbeaconに対応していない可能性があります";
//       　　　 reply4(CHANNEL_ACCESS_TOKEN, reply_token, m1, m2, m3, m4);
//      }      
//      
//    
//
//    //////////////////////////////////////////////////////////////////////////////////message
//    } else if(type == 'message'){  
//      keyword = json.events[0].message.text;
//      
//    //  outputLog(userId);
//    //  outputLog(CHANNEL_ACCESS_TOKEN);
//      display_name = getUserDisplayName(userId, CHANNEL_ACCESS_TOKEN);
//    //  outputLog(display_name);
//      set_message_data_log(userId, keyword, display_name); 
//      set_message_data(userId, display_name);
//    //    outputLog("message fin");
//      
//      if(keyword == "おるか"){
//          oruka(reply_token);
//      } else if(keyword == "Oi" ){
//          oruka_mas(reply_token);
//      }
//     ///////////////////////////////////////////通知設定
//      else if(keyword == "通知on/off"){
//        
//        
//          var url = 'https://api.line.me/v2/bot/message/reply';
//  return UrlFetchApp.fetch(url, {
//    'headers': {
//      'Content-Type': 'application/json; charset=UTF-8',
//      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
//    },
//    'method': 'post',
//    'payload': JSON.stringify({
//      'replyToken': reply_token,
//      'messages': [
//        {
//  "type": "template",
//  "altText": "this is a buttons template",
//  "template": {
//    "type": "buttons",
//    "actions": [
//      {
//        "type": "postback",
//        "label": "通知 ON",
//        "displayText": "通知ON",
//        "data": "起きて"
//      },
//      {
//        "type": "postback",
//        "label": "通知 OFF",
//        "displayText": "通知OFF",
//        "data": "うるさい"
//      }
//    ],
//    "title": "通知設定",
//    "text": "端末がビーコンに反応するとメッセージで通知します。"
//  }
//},
//      ],
//    }),
//  });
/////////////返信まとまり
//        //////////////////////////////////////////////////SSID
//     } else if(keyword == "SSID・施設名"){
//        try{
//        check_hwid = get_hwid_by_userId(userId);
//           //outputLog("check_hwid=" + check_hwid);
//          userId = null;
//        check_ssId = get_ssId_by_hwid(check_hwid);
//           //outputLog("check_ssId=" +  check_ssId);
//        check_name = get_name_by_hwid(check_hwid);
//           // outputLog("check_name=" +  check_name);
//        reply_message = check_ssId;
//        reply_message_name = "施設名：" + check_name; 
//           // outputLog(reply_message_name);
//        reply2(CHANNEL_ACCESS_TOKEN, reply_token, reply_message, reply_message_name);
//        } catch(e){
//        m1 ="ビーコンに反応していません";
//        m2 ="お使いの施設にビーコンが設置されているか確認してください";
//        reply2(CHANNEL_ACCESS_TOKEN, reply_token, m1, m2);
//        }
//        /*
//        var url = 'https://api.line.me/v2/bot/message/reply';
//  return UrlFetchApp.fetch(url, {
//    'headers': {
//      'Content-Type': 'application/json; charset=UTF-8',
//      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
//    },
//    'method': 'post',
//    'payload': JSON.stringify({
//      'replyToken': reply_token,
//      'messages': [
//     
//        {'type': 'text',
//         'text': reply_message,},
//        {'type': 'text',
//         'text': "施設名：" + reply_message_name,},
//      ],
//    }),
//  });
//  */
//        ////////////////////////////////////使いかた
//      } else if(keyword == "使い方"){
//        var url = 'https://api.line.me/v2/bot/message/reply';
//  return UrlFetchApp.fetch(url, {
//    'headers': {
//      'Content-Type': 'application/json; charset=UTF-8',
//      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
//    },
//    'method': 'post',
//    'payload': JSON.stringify({
//      'replyToken': reply_token,
//      'messages': [
//        {
//  "type": "template",
//  "altText": "this is a buttons template",
//  "template": {
//    "type": "buttons",
//    "actions": [
//      {
//        "type": "postback",
//        "label": "ビーコンに反応しない",
//        "displayText": "ビーコンに反応しない",
//        "data": "ビーコンに反応しない"
//      },
//        
//        
//      {
//        "type": "postback",
//        "label": "入力しても反応がない",
//        "displayText": "入力しても反応がない",
//        "data": "反応がない"
//      },
//      {
//        "type": "postback",
//        "label": "入力しても違うといわれる",
//        "displayText": "入力しても違うといわれる",
//        "data": "違うといわれる"
//      }
//     
//    ],
//    "title": "使い方",
//    "text": "友達や施設から聞いた合言葉をチャットに入力してくだい！wifiのパスワードをお教えします！"
//  }  
//},
// {'type': 'text',
//         'text': "合言葉を入力する前にビーコンに反応している必要があります！",
// },
//],
//    }),
//  });
//      } else if(keyword == "Wi-Fiパスワード"){
//        var url = 'https://api.line.me/v2/bot/message/reply';
//  return UrlFetchApp.fetch(url, {
//    'headers': {
//      'Content-Type': 'application/json; charset=UTF-8',
//      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
//    },
//    'method': 'post',
//    'payload': JSON.stringify({
//      'replyToken': reply_token,
//      'messages': [
// {'type': 'text',
//         'text': "友達や施設から聞いた合言葉をチャットに入力してくだい！",
// },
// {'type': 'text',
//         'text': "合言葉が一致するとパスワードをお教えします",
// },
//
//],
//    }),
//  });
//        
//      } else{
//         //  outputLog("1text_userId=" + userId);
//         //  outputLog("keyword=" + keyword);
//         //  outputLog("userId=" + userId);
//     check_hwid = get_hwid_by_userId(userId);
//         //   outputLog("check_hwid=" + check_hwid);
//          
//     check_keyword = get_keyword_by_hwid(check_hwid);
//         //   outputLog("check_keyword=" +  check_keyword);
//     wifi_paswd = get_wifi_paswd_by_hwid(check_hwid);
//         //   outputLog("wifi_paswd=" + wifi_paswd);      
//        
//      if(keyword == check_keyword){
//        　reply_message = "合言葉が一致したよ！"
//          reply_message_paswd = wifi_paswd;
//          reply_message_good = "wi-fiのパスワードです☆"
//      } else {
//          reply_message = "合言葉が違うよ(笑)";
//          reply_message_paswd = "もう一度入力して";
//          reply_message_good =　"がんばれ！";
//     //   outputLog(reply_message);
//     //   outputLog(reply_message_paswd);
//     //  outputLog(reply_message_good);
//     //    outputLog(userId);
//     //   outputLog(keyword);
//     //   outputLog(display_name);
//       
//      }
//        
//  var url = 'https://api.line.me/v2/bot/message/reply';
//   UrlFetchApp.fetch(url, {
//    'headers': {
//      'Content-Type': 'application/json; charset=UTF-8',
//      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
//    },
//    'method': 'post',
//    'payload': JSON.stringify({
//      'replyToken': reply_token,
//      'messages': [
//        {'type': 'text',
//         'text': reply_message,},
//        {'type': 'text',
//         'text': reply_message_paswd,},
//        {'type': 'text',
//         'text': reply_message_good,},
//      ],
//    }),
//  });
//  ///////////////////返信まとまり
//   
// }  ///keyword ==
//        
//      }   //type ==
//        }  //post
//        
//
//        
// 
//
//
//        
//
//
//function get_fool_name(id){
//  Person.equalTo("userId",id)
//  var items = Person.fetchAll();
//  var item = items[0];
//  var result_hwid = item.fields.user_name;
//     //outputLog(result_hwid);
//     return result_hwid;
//}
//
//function get_good_where(id){
//    Master.equalTo("hwid",id)
//  var items = Master.fetchAll();
//  var item = items[0];
//  var result_hwid = item.fields.field_name;
//     //outputLog(result_hwid);
//     return result_hwid;
//}
//
//
//function get_hwid_by_userId(id){
//  Person.equalTo("userId",id)
//  var items = Person.fetchAll();
//  var item = items[0];
//  var result_hwid = item.fields.hwid;
//     //outputLog(result_hwid);
//     return result_hwid;
//}
//                              
//function get_ssId_by_hwid (id){
//  Master = ncmb.DataStore("master");
//  Master.equalTo("hwid",id)
//  var items = Master.fetchAll();
//  var item = items[0];
//  var rson = item.fields.ssid;
//     //outputLog(rson);
//     return(rson);
//}
//                           
//function get_name_by_hwid (id){
//  Master = ncmb.DataStore("master");
//  Master.equalTo("hwid",id)
//  var items = Master.fetchAll();
//  var item = items[0];
//  var rson = item.fields.field_name;
//     //outputLog(rson);
//     return(rson);
//}
//        
//function get_keyword_by_hwid(id){
//  Master = ncmb.DataStore("master");
//  Master.equalTo("hwid",id)
//  var items = Master.fetchAll();
//  var item = items[0];
//  var result_keyword = item.fields.keyword;
//    // outputLog(result_keyword);
//     return result_keyword;
//}
//
//function get_wifi_paswd_by_hwid (id){
//  Master = ncmb.DataStore("master");
//  Master.equalTo("hwid",id)
//  var items = Master.fetchAll();
//  var item = items[0];
//  var rson = item.fields.wifiPswd;
//     //outputLog(rson);
//     return(rson);
//}
//function set_exist_Id(){
//  
//        } 
//        
//function set_beacon_data(hwid, userId, display_name){
// // outputLog("メソッドすたーと");
//  Person = ncmb.DataStore("person");
//  try{
//  //  outputLog("try");
//      Person.equalTo("userId", userId)
//      var items = Person.fetchAll();
//      var item = items[0];
//      item.set('hwid', hwid);
//      item.set('display_name', display_name);
//      item.set("exist_room", "true");
//      item.update();
//  }catch(e){
//   // outputLog("catch");
//     person.set("hwid", hwid)
//      .set("userId", userId)
//      .set("sleep", "true")
//      .set('display_name', display_name)
//      .set('exist_room', "true")
//      .save()
//     return ;
//  }
//  //  outputLog("fainaly");
//}
//  
//  
//  function send_exist_room(){
//     outputLog("start");
//    push_exist_room();
//      outputLog("push");
//    delete_m();
//      outputLog("delete");
//  }  
//  
// function oruka(reply_token){
//  var exist_name = [];
//  var push_message_ylab = "ylab:";
//  var push_message_house = "house:";
//  Person = ncmb.DataStore("person");
//try{
//  Person.equalTo("exist_room","true")
//  var items = Person.fetchAll();
//  for(var i=0; i<items.length; i++){
//    
//      if(items[i].fields.hwid == "012c669b82"){
//        push_message_ylab += items[i].fields.display_name + "\n";
//      }
//      if(items[i].fields.hwid == "000002b868"){
//        push_message_house += items[i].fields.display_name + "\n";
//      }
//    
//  }
////    var m1 = JSON.stringify(push_message_ylab);
//  var url = 'https://api.line.me/v2/bot/message/push';
//  reply1(CHANNEL_ACCESS_TOKEN, reply_token, push_message_ylab);
// }catch(e){
//   outputLog(e);
//   return;
// }
//    
////  "U2012df34792adf4ce94b2b36d669bd59",
//}        
// 
//function oruka_mas(reply_token){
//  var exist_name = [];
//  var push_message_ylab = "ylab:";
//  var push_message_house = "house:";
//  Person = ncmb.DataStore("person");
//try{
//  Person.equalTo("exist_room","true")
//  var items = Person.fetchAll();
//  for(var i=0; i<items.length; i++){
//    if(items[i].fields.userId !== "U2012df34792adf4ce94b2b36d669bd59"){
//      if(items[i].fields.hwid == "012c669b82"){
//        push_message_ylab += items[i].fields.display_name + '\n';
//      }
//      if(items[i].fields.hwid == "000002b868"){
//        push_message_house += items[i].fields.display_name + '\n';
//      }
//    }
//  }
//    var m1 = JSON.stringify(push_message_ylab);
//    var m2 = JSON.stringify(push_message_house);
//  reply2(CHANNEL_ACCESS_TOKEN, reply_token, m1, m2);
// }catch(e){
//   outputLog(e);
//   return;
// }
//    
////  "U2012df34792adf4ce94b2b36d669bd59",
//}          
//  
//function push_exist_room(){
//  var exist_name = [];
//  var push_message_ylab = "ylab:";
//  var push_message_house = "house:";
//  Person = ncmb.DataStore("person");
//try{
//  Person.equalTo("exist_room","true")
//  var items = Person.fetchAll();
//  for(var i=0; i<items.length; i++){
//    if(items[i].fields.userId !== "U2012df34792adf4ce94b2b36d669bd59"){
//      if(items[i].fields.hwid == "012c669b82"){
//        push_message_ylab += items[i].fields.display_name + '\n';
//      }
//      if(items[i].fields.hwid == "000002b868"){
//        push_message_house += items[i].fields.display_name + '\n';
//      }
//    }
//  }
//    var m1 = JSON.stringify(push_message_ylab);
//    var m2 = JSON.stringify(push_message_house);
//  var url = 'https://api.line.me/v2/bot/message/push';
//  var push_userId = "U2012df34792adf4ce94b2b36d669bd59";
//  push2(CHANNEL_ACCESS_TOKEN,  m1, m2);
// }catch(e){
//   outputLog(e);
//   return;
// }
//    
////  "U2012df34792adf4ce94b2b36d669bd59",
//}        
//     
//
//function delete_m(){
// // outputLog("メソッドすたーと");
//  Person = ncmb.DataStore("person");
//  try{
//  //  outputLog("try");
//      Person.equalTo("exist_room", "true")
//      var items = Person.fetchAll();
//      var length = items.length;
//      outputLog(length);
//    for(var i=0; i<items.length; i++ ){
//      var item = items[i];
//      item.set("exist_room", "false");
//      item.update();
//    }
//  }catch(e){
//     return ;
//  }
//}
//  
// 
//        
//function set_message_data(userId, display_name){
// // outputLog("メソッドすたーと");
//  Person = ncmb.DataStore("person");
//  try{
// //   outputLog("try");
//      Person.equalTo("userId", userId)
//      var items = Person.fetchAll();
//      var item = items[0];
//      item.set('display_name', display_name);
//      item.update();
//      //    outputLog("tryfinish");
//  }catch(e){
//  //  outputLog("catch");
//     person.set("userId", userId)
//      .set('display_name', display_name)
//      .save()
//     return ;
//  }
//  //  outputLog("fainaly");
//}
//        
// 
//function set_beacon_data_log(hwid, userId, display_name){ 
//  person_log.set("hwid", hwid)
//      .set("userId", userId)
//      .set('display_name', display_name)
//      .save() 
//}
//
//function set_message_data_log(userId, message, display_name){ 
//     //   outputLog("method datalog");
//  person_log.set("userId", userId)
//      .set('message', message)
//      .set('display_name', display_name)
//      .save()
//}
//      
//        
//
//        
//function get_sleep(id){
//  Person = ncmb.DataStore("person");
//  Person.equalTo("userId",id)
//  var items = Person.fetchAll();
//  var item = items[0];
//  var wrson = item.fields.sleep;
//  return wrson;
//}        
//        
//function set_sleep(userId, sleep){
//  Person = ncmb.DataStore("person");
//  Person.equalTo("userId", userId)
//      var items = Person.fetchAll();
//      var item = items[0];
//      item.set('sleep', sleep);
//      item.update();
//}
//
// function get_date(id){
//  Person = ncmb.DataStore("person");
//  Person.equalTo("userId",id)
//  var items = Person.fetchAll();
//  var item = items[0];
//  var data = [];
//  data = item.fields.updateDate;
//  // outputLog(data)
//   var hour = Number((data[11]) + (data[12])) + 9;
//  data_send = data[5] + data[6] + "/" + data[8] + data[9] + "/" + hour + ":" + data[14] + data[15]; 
//  // outputLog(data_send);
//   return data_send;
// }
//
//function set_sleep_log(userId, sleep){ 
//  person_log.set("sleep", sleep)
//            .set("userId", userId)
//            .save() 
//}
//       
//        
//        
//function getUserDisplayName(user_id, CHANNEL_ACCESS_TOKEN) {
//  var line_endpoint_profile = 'https://api.line.me/v2/bot/profile';
//  var res = UrlFetchApp.fetch(line_endpoint_profile + '/' + user_id, {
//    'headers': {
//      'Content-Type': 'application/json; charset=UTF-8',
//      'Authorization': 'Bearer ' +  CHANNEL_ACCESS_TOKEN,
//    },
//    'method': 'get',
//  });
//  var h = JSON.parse(res).displayName;
//  //outputLog(h);
//  return h;
//}
//
//
//
//
//function reply1(CHANNEL_ACCESS_TOKEN, reply_token, m1){
// // outputLog("methodstart");
// // outputLog(CHANNEL_ACCESS_TOKEN);
// // outputLog(m1);
// // outputLog(reply_token);
//  var url = 'https://api.line.me/v2/bot/message/reply';     
//  return UrlFetchApp.fetch(url, {
//    'headers': {
//      'Content-Type': 'application/json; charset=UTF-8',
//      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
//    },
//    'method': 'post',
//    'payload': JSON.stringify({
//      'replyToken': reply_token,
//      'messages': [
//        {'type': 'text',
//         'text': m1,},
//        
//      ],
//    }),
//  });
//        }
//
//function reply2(CHANNEL_ACCESS_TOKEN, reply_token, m1, m2){
//  var url = 'https://api.line.me/v2/bot/message/reply';     
//  return UrlFetchApp.fetch(url, {
//    'headers': {
//      'Content-Type': 'application/json; charset=UTF-8',
//      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
//    },
//    'method': 'post',
//    'payload': JSON.stringify({
//      'replyToken': reply_token,
//      'messages': [
//        {'type': 'text',
//         'text': m1,},
//        {'type': 'text',
//         'text': m2,},
//        
//      ],
//    }),
//  });
//        }
//
//function reply3(CHANNEL_ACCESS_TOKEN, reply_token, m1, m2, m3){
//  var url = 'https://api.line.me/v2/bot/message/reply';     
//  return UrlFetchApp.fetch(url, {
//    'headers': {
//      'Content-Type': 'application/json; charset=UTF-8',
//      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
//    },
//    'method': 'post',
//    'payload': JSON.stringify({
//      'replyToken': reply_token,
//      'messages': [
//        {'type': 'text',
//         'text': m1,},
//        {'type': 'text',
//         'text': m2,},
//        {'type': 'text',
//         'text': m3,},
//        
//      ],
//    }),
//  });
//        }
//        
//  function reply4(CHANNEL_ACCESS_TOKEN, reply_token, m1, m2, m3, m4){
//  var url = 'https://api.line.me/v2/bot/message/reply';     
//  return UrlFetchApp.fetch(url, {
//    'headers': {
//      'Content-Type': 'application/json; charset=UTF-8',
//      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
//    },
//    'method': 'post',
//    'payload': JSON.stringify({
//      'replyToken': reply_token,
//      'messages': [
//        {'type': 'text',
//         'text': m1,},
//        {'type': 'text',
//         'text': m2,},
//        {'type': 'text',
//         'text': m3,},
//        {'type': 'text',
//         'text': m4,},
//        
//        
//      ],
//    }),
//  });
//        }
//  
//  function push1(CHANNEL_ACCESS_TOKEN, m1){
//   push_userId = "U2012df34792adf4ce94b2b36d669bd59"
//   var url = 'https://api.line.me/v2/bot/message/push';
//    UrlFetchApp.fetch(url, {
//    'headers': {
//      'Content-Type': 'application/json; charset=UTF-8',
//      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
//    },
//    'method': 'post',
//    'payload': JSON.stringify({
//      'to': push_userId,
//      'messages': [
//        {'type': 'text',
//         'text': m1}
//      ],
//    }),
//  });
//        }
//  
//  function push2(CHANNEL_ACCESS_TOKEN, m1, m2){
//   push_userId = "U2012df34792adf4ce94b2b36d669bd59"
//   var url = 'https://api.line.me/v2/bot/message/push';
//    UrlFetchApp.fetch(url, {
//    'headers': {
//      'Content-Type': 'application/json; charset=UTF-8',
//      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
//    },
//    'method': 'post',
//    'payload': JSON.stringify({
//      'to': push_userId,
//      'messages': [
//        {'type': 'text',
//         'text': m1},
//        {'type': 'text',
//         'text': m2}
//      ],
//    }),
//  });
//        }
//
//
//
//       
