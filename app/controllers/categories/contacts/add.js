import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CategoriesContactsAddController extends Controller {
  @action save(contact) {
    let category = this.modelFor('categories.contact');
    let c = this.store.createRecord('contact', contact);
    c.category = category;
    c.save.then(() => {
      this.router.transitionTo('categories.contacts', category);
    });
  }
}
