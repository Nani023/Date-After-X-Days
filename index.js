const addDays = require("date-fns/addDays");
const getDateAfterXDays = (days)=> {
    const newDate = addDays(new Date(2023, 7, 20),days);
    return ${newDate.getDate()}- ${
        newDate.getMonth() +1}-${newDate.getFullYear()};
};
module.exports = getDateAfterXDays;