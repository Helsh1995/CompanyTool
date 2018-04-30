import {Project} from "./project.domain";

export class Client {

  id: any;
  name: string;
  projects: Project[];

  constructor(data) {
    this.id = data && data.id ? data.id : null;
    this.name = data && data.name ? data.name : '';
    this.projects = data && data.projects ? data.projects.map(project => new Project(project)) : [];
  }

}
