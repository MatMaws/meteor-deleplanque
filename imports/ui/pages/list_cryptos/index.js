import './list_crypto.html';
import './list_crypto.css';

import { Crypto } from '../../../api/crytocurrency/crytocurrency.js';
import { Wallets } from '../../../api/wallets/wallets.js';

// TODO : Insérer les souscriptions
Template.list_crypto.onCreated(function() {
  this.autorun(() => {
    this.subscribe('crypto');
  });
});

// TODO : Insérer le helper
Template.list_crypto.helpers({
  cryptos() {
    return Crypto.find();
  },
});

Template.list_crypto.onCreated(function() {
  this.subscribe('Wallets');
});

Template.crypto.helpers({
  inWallet() {
    return Wallets.findOne({
      $and: [{ code: this.code }, { owner: Meteor.userId() }],
    }).nbCoins;
  },
});

Template.navbar.onCreated(function() {
  this.autorun(() => {
    this.subscribe('Wallets');
  });
});

Template.navbar.helpers({
  dollarWallet() {
    return (
      Wallets.findOne({ $and: [{ owner: Meteor.userId() }, { code: 'usdt' }] })
        .nbCoins | 0
    );
  },
});

Template.navbar.onCreated(function() {
  this.autorun(() => {
    this.subscribe('Wallets');
    this.subscribe('Sales.owner');
  });
});

Template.navbar.helpers({
  dollarWallet() {
    return (
      Wallets.findOne({ $and: [{ owner: Meteor.userId() }, { code: 'usdt' }] })
        .nbCoins | 0
    );
  },
  salesCount() {
    return Sales.find({ owner: Meteor.userId(), buyerId: '' }).count();
  },
});
