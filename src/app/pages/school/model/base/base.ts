import {Model} from "./model";
import {Describer} from "./describer";

/**
 * Created by Samuel on 12/10/2017.
 */

export class Base implements Model {
  id: number;
  created: Date;
  modified: Date;
}
