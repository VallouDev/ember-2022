import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = 'Texte par défaut';
  @tracked info = '';
  MAX = 100;

  get size() {
    return this.content.length;
  }

  get max() {
    return this.MAX;
  }

  get nbrestant() {
    return this.MAX - this.content.length;
  }

  @action
  clear() {
    this.clear;
  }

  // eslint-disable-next-line getter-return
  get style() {
    if (this.size <= 20) {
      return 'danger';
    }
    if (this.size >= 20 && this.size <= 50) {
      return 'warning';
    }
  }
}
