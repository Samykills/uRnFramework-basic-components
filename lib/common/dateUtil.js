import moment from "moment-timezone";

class DateUtil {
  static convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();
    var mmChars = mm.split("");
    var ddChars = dd.split("");

    return (
      yyyy +
      "-" +
      (mmChars[1] ? mm : "0" + mmChars[0]) +
      "-" +
      (ddChars[1] ? dd : "0" + ddChars[0])
    );
  }

  //DD MMM YYYY format i.e 20 Aug 2019
  static formatDate(date) {
    let newDate = moment(date).format("DD MMM YYYY");
    return newDate;
  }

  //DD MMM YYYY HH:mm format i.e 20 Aug 2019
  static formatDateTime(date) {
    let newDate = moment(date).format("DD MMM YYYY HH:mm");
    return newDate;
  }
  static convertTime(ms) {
    function addZ(n) {
      return (n < 10 ? "0" : "") + n;
    }
    var dt = new Date(ms);
    var hrs = dt.getHours();
    var mins = dt.getMinutes();
    var tm = addZ(hrs) + ":" + addZ(mins);
    return tm;
  }

  static msToHMS(ms) {
    function addZ(n) {
      return (n < 10 ? "0" : "") + n;
    }
    var dt = new Date(ms);
    var hrs = dt.getHours();
    var mins = dt.getMinutes();
    var tm = addZ(hrs) + ":" + addZ(mins);
    return tm;
  }

  static calculateMinutes = minutes => {
    var hours = 0;
    var days = 0;
    if (minutes == "") {
      return "";
    }
    if (minutes != "") {
      if (minutes >= 60) {
        hours = minutes / 60;
        if (hours >= 24) {
          days = hours / 24;
        }
      }
      if (days != 0) {
        return days.toFixed(0) + " Days";
      } else if (hours != 0) {
        return hours.toFixed(0) + " Hours";
      } else {
        return minutes + " Mins";
      }
    }
  };

  static getDeviceTimeZone() {
    return moment.tz.guess();
  }
}
export default DateUtil;
