import Route from '@ember/routing/route';
import { service } from '@ember/routing/route';
import { action } from

export default class ContactsUpdateRoute extends Route {
  @service store;


  model(params){
    return this.store.FindRecord('contact', params.contact_id);
  }

  @action save(contact){
    contact.save().then(() =>
        this.router.transitionTo('Contacts')
    );

  }
}
