import './navbar.html';
import './navbar.css';

import { Template } from 'meteor/templating';

Template.navbar.helpers({
  dollarWallet() {
    return 9876;
  },
  currency: 'dollars',
});
