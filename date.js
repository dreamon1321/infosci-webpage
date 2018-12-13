window.onlaod=confirmSee();

function confirmSee() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10) {
    dd = '0'+dd
  }
  if(mm<10) {
    mm = '0'+mm
  }
  today = mm + '/' + dd + '/' + yyyy;
  window.alert("Current Date is " + today + ". You have all break to forget "+
              "about next semester. Are you sure you want to see this sched?");
}
