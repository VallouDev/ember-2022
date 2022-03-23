import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('date') dateCreation;
  @attr('number') amount;
  @attr('number') toPay;
  @attr('string') status;
  @attr('number') itemsNumber;
  @attr('number') missingNumber;
  @hasMany('orderdetail') orderdetails;
  @belongsTo('user') user;

  get count() {
    return this.orderdetails.length;
  }

  get statut(){
    if (this.status == 'created'){
      return (this.status = '⌛');
    }
    if (this.status == 'prepared'){
      return (this.status = '✔️ ');
    }
    return null;
  }

}
