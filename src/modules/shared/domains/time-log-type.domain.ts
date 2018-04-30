import {getRandomColor} from "../../../utils/random-color-generator";

export class TimeLogType {

  id: any;
  text: string;
  color: string;

  constructor(data) {
    this.id = data && data.id ? data.id : null;
    this.text = data && data.text ? data.text : null;
    this.color = data && data.color ? data.color : getRandomColor();
  }

}
