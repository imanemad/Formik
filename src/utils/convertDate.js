import moment from 'moment-jalaali';
import 'moment/locale/fa'; // برای اضافه کردن پشتیبانی زبان فارسی

moment.loadPersian({ dialect: 'persian-modern' }); // تنظیمات زبان فارسی مدرن

export const convertDate= date =>moment(date).format('jYYYY/jMM/jDD')