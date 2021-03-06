function set_uzai() {
  Send_list = ncmb.DataStore("arp");
  Send_list.equalTo("userId", "0000")
  var items = Send_list.fetchAll();
  var item = items[0];
  item.set("exist", "false");
  item.update();
}


function set_send_true(id) {
  Send_list = ncmb.DataStore("send_list");
  Send_list.equalTo("userId", id)
  var items = Send_list.fetchAll();
  var item = items[0];
  item.set("send_true", "true");
  item.update();
}


function set_send_false() {
  Send_list = ncmb.DataStore("send_list");
  var items = Send_list.fetchAll();
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    item.set("send_true", "false");
    item.update();
  }
}


function set_notify_enter_false(id) {
  Person = ncmb.DataStore("person");
  Person.equalTo("userId", id)
  var items = Person.fetchAll();
  var item = items[0];
  item.set("notify_enter", "false");
  item.update();
}

function set_notify_enter_true() {
  Person = ncmb.DataStore("person");
  try {
    var items = Person.fetchAll();
    var length = items.length;
    outputLog(length);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      item.set("notify_enter", "true");
      item.update();
    }
  } catch (e) {
    outputLog(e)
    return;
  }
}



function set_beacon_data(hwid, userId, display_name) {
  Person = ncmb.DataStore("person");
  try {
    Person.equalTo("userId", userId)
    var items = Person.fetchAll();
    var item = items[0];
    item.set('hwid', hwid);
    item.set('display_name', display_name);
    item.set("exist_room", "true");
    item.update();
  } catch (e) {
    person.set("hwid", hwid)
      .set("userId", userId)
      .set("sleep", "true")
      .set('display_name', display_name)
      .set('exist_room', "true")
      .set('notify_enter', "true")
      .save()
    return;
  }
}


function set_exist_room_false() {
  Person = ncmb.DataStore("person");
  try {
    Person.equalTo("exist_room", "true")
    var items = Person.fetchAll();
    var length = items.length;
    outputLog(length);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      item.set("exist_room", "false");
      item.update();
    }
  } catch (e) {
    return;
  }
}


function set_message_data(userId, display_name) {
  Person = ncmb.DataStore("person");
  try {
    Person.equalTo("userId", userId)
    var items = Person.fetchAll();
    var item = items[0];
    item.set('display_name', display_name);
    item.update();
  } catch (e) {
    person.set("userId", userId)
      .set('display_name', display_name)
      .save()
    return;
  }
}


function set_beacon_data_log(hwid, userId, display_name) {
  person_log.set("hwid", hwid)
    .set("userId", userId)
    .set('display_name', display_name)
    .save()
}

function set_message_data_log(userId, message, display_name) {
  person_log.set("userId", userId)
    .set('message', message)
    .set('display_name', display_name)
    .save()
}


function set_sleep(userId, sleep) {
  Person = ncmb.DataStore("person");
  Person.equalTo("userId", userId)
  var items = Person.fetchAll();
  var item = items[0];
  item.set('sleep', sleep);
  item.update();
}


function set_sleep_log(userId, sleep) {
  person_log.set("sleep", sleep)
    .set("userId", userId)
    .save()
}


function set_notify_true(userId) {
  try {
    Send_list = ncmb.DataStore("send_list");
    Send_list.equalTo("userId", userId)
    var items = Send_list.fetchAll();
    var item = items[0];
    outputLog(JSON.stringify(item));
    item.set('notify', "true");
    item.update();
  } catch (e) {
    send_list.set("notify", "true")
      .save()
  }
  return;
}


function set_notify_false(userId) {
  try {
    Send_list = ncmb.DataStore("send_list");
    Send_list.equalTo("userId", userId)
    var items = Send_list.fetchAll();
    var item = items[0];
    outputLog(JSON.stringify(item));
    item.set('notify', "false");
    item.update();
  } catch (e) {
    send_list.set("notify", "false")
      .save()
  }
  return;
}




function set_notify_rece_true(userId) {
  try {
    Person = ncmb.DataStore("person");
    Person.equalTo("userId", userId)
    var items = Person.fetchAll();
    var item = items[0];
    item.set('send_push_notify', "true");
    item.update();
  } catch (e) {
    send_list.set("send_push_notify", "true")
      .save()
  }
  return;
}



function set_notify_rece_false(userId) {
  try {
    Person = ncmb.DataStore("person");
    Person.equalTo("userId", userId)
    var items = Person.fetchAll();
    var item = items[0];
    item.set('send_push_notify', "false");
    item.update();
  } catch (e) {
    send_list.set("send_push_notify", "false")
      .save()
  }
  return;
}