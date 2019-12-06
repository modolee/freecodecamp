const getDate = (dateString) => {
    let date, convertedDateString;
    if (dateString === null || dateString === undefined) {
        date = new Date();
    } else {
        if (isNumeric(dateString)) {
            convertedDateString = Number(dateString);
        } else {
            convertedDateString = dateString;
        }

        if(isValidDate(convertedDateString)) {
            date = new Date(dateString);
        } else {
            date = null;
        }
    }

    return date;
};

const isNumeric = (number) => {
    return !isNaN(number);
};

const isValidDate = (dateString) => {
    return !isNaN(Date.parse(dateString));
};

module.exports = {
    getDate
};