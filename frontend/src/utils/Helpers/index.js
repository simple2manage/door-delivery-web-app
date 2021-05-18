import React from "react";
import Moment from 'react-moment';
import * as moment from "moment";

export function capitalizeWord(value) {
  if (typeof value !== "string") return "";
  return value
    .toLowerCase()
    .split(",")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(", ");
}

export function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

export function formatDate(value, format = "DD/MM/YYYY") {
  return <Moment format={format}>{value}</Moment>;
}

export function formatDateValid(value, format = "DD/MM/YYYY") {
  var m = moment(value);
  return m.locale("en").format(format)
}

export function getCurrentDateTime(format = "DD/MM/YYYY") {
  return <Moment format={format}></Moment>;
}

export function objectPropInArray(list, prop, val) {
  if (list.length > 0) {
    for (const i in list) {
      if (list[i][prop] === val) {
        return true;
      }
    }
  }
  return false;
}

export function dateToFromNowDaily(myDate) {

  // get from-now for this date
  var fromNow = moment(myDate).fromNow();

  // ensure the date is displayed with today and yesterday
  return moment(myDate).calendar(null, {
    // when the date is closer, specify custom values
    lastWeek: '[Last] dddd',
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    // when the date is further away, use from-now functionality             
    sameElse: function () {
      return "[" + fromNow + "]";
    }
  });
}

export function formatDateForString(date, format = "DD/MM/YYYY") {
  return moment(date).format(format);
}

export function isToday(dateString) {
  const today = new Date();
  const date = new Date(dateString);
  return date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
}