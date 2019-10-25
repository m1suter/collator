import {Base} from './base';
import {Customer} from './customer';
import {Address} from './address';
import {Picture} from './picture';

export class Project extends Base {
  public customer: Customer;
  public address: Address;
  public pictures: Picture[];
}
