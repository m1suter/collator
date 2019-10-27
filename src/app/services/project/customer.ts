import {Base} from './base';
import {Address} from './address';

export class Customer extends Base {
  public name: string;
  public sureName: string;
  public tel: string;
  public mobile: string;
  public mail: string;
  public address: Address;
}
