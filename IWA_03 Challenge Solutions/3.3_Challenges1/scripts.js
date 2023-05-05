import {company} from './configuration';
import {year} from './configuration';
console.log(company,year);

const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;

export default message;

/*add console log*/