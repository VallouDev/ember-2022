import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}
Router.map(function () {
  this.route('contacts-update');
  this.route('categories',{ path: '/contacts/:categoriesl' }), function () {
    this.route('add');
    this.route('update');
    this.route('contacts',{ path: '/contacts/:contactsl' }), function () {
      this.route('add');
      this.route('update');
    });
  });
});
