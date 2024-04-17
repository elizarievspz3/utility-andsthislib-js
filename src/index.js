// index.js

class DateHelper {
    static getCurrentDate() {
        return new Date();
    }

    static formatDate(date) {
        return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }

    static getTimeStamp() {
        return Date.now();
    }
}

class RandomDataGenerator {
    static generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
}

module.exports.DateHelper = DateHelper;
module.exports.RandomDataGenerator = RandomDataGenerator;
