var CronJob = require('cron').CronJob
new CronJob('* * * * * *', function () {
  console.log('You will see this message every second')
}, null, true, 'America/Los_Angeles')

var later = require('later')

// console.log(later.parse.text('every 10 mins between 8:00 and 23:00'))

// every 5 minutes between 8-5PM - monday-friday

// MIN HOUR MONTHDAY MONTH WEEKDAY
console.log(
  later.parse.cron('5 8-17 * * 1-5').schedules
)

console.log(
  later.parse.recur().on(5).minute().onWeekday().after('08:00').time().before('17:00').time().schedules
)

console.log(
  later.parse.recur().on(5).minute().onWeekday().every(1).hour().between(8, 17).schedules
)

console.log(
  later.parse.recur().every(5).minute().onWeekday().every(1).hour().between(8, 17).schedules
)
