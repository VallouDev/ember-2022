import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { hasMany } from '@ember-data/model';

export default class CategoryModel extends Model {
  @attr('string') nom;
  @attr('string') prenom;
  @attr('string') email;

  @hasMany('contact') contacts;
}
