/**
 * Created by Samuel on 14/10/2017.
 */
export interface Master {
  getValue(): string;
  setEnable(status: boolean): void;
  isValid(): boolean;
  title(): string;
}
