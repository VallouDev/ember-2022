import Route from '@ember/routing/route';

export default class CategoriesRoute extends Route {
  model() {
    this.store.findAll('categorie');
  }
}
