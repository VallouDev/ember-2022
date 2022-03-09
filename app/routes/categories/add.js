import Route from '@ember/routing/route';
import { action, set } from '@ember/routing/route';
import { service } from '@ember/routing/route';

export default class CategoriesAddRoute extends Route {
  @service router;
  @service route;
  setupController(controller) {
    set(controller, 'save', this.save);
  }

  @action save(c) {
    let contact = this.store.createRecord('category', c);
    contact.save().then(() => {
      this.router.transitionTo('categories');
    });
  }
}
