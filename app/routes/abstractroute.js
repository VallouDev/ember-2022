import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class abstractroute extends Route {
  @service userAuth;
  @service router;

  redirect() {
    if (!this.userAuth.isAuth) {
      this.router.transitionTo('index');
    }
  }
}
