const getDate = (dateString) => {
    let date, convertedDateString;
    if (dateString === null || dateString === undefined) {
        date = new Date();
    } else {
        convertedDateString = getDateWithType(dateString);
        date = getValidDateOrNull(convertedDateString);
    }

    return date;
};

const isNumeric = (number) => {
    return !isNaN(number);
};

const getDateWithType = (dateString) => {
    let convertedDateString;

    if (isNumeric(dateString)) {
        convertedDateString = Number(dateString);
    } else {
        convertedDateString = dateString;
    }

    return convertedDateString;
}

const getValidDateOrNull = (dateString) => {
    let date;

    if(!(date = new Date(dateString))) {
        date = null;
    }

    return date;
};

module.exports = {
    getDate
};