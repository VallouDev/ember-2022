import Route from '@ember/routing/route';

export default class OrderIdOrderRoute extends Route {



  model() {
  return this.store.findRecord('order',1, {include: 'user,orderdetails.product'});
}

}

