import { Meteor } from 'meteor/meteor';
import { Crypto } from '../crytocurrency.js';

// TODO : Insérer la publication des cryptomonnaies
Meteor.publish('crypto', () => {
  return Crypto.find({});
});
