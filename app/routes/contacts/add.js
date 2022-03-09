import Route from '@ember/routing/route';

export default class ContactsAddRoute extends Route {
  @service store;
  @service router;

  model() {
    return {};
  }

  @action save(c) {
    let category = this.modelFor('categories.contacts');
  }
}
