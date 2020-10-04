const randomNumber = ({ min, max, integer }) => {

    const number = Math.random() * (max - min) + min;

    if (integer) {
        return Math.round(number);
    }

    return number;

}
