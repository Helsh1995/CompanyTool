export class Project{

  id: any;
  name: string;

  constructor(data){

    this.id = data && data.id ? data.id: null;
    this.name = data && data.name ? data.name: '';

  }

}
