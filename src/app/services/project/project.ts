import {Base} from './base';
import {Customer} from './customer';
import {Picture} from './picture';

export class Project extends Base {
  public assignment: string;
  public dayOfWork: string;
  public customer: Customer;
  public pictures: Picture[];
}
