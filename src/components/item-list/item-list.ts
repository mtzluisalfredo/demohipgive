import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'item-list',
  templateUrl: 'item-list.html'
})
export class ItemListComponent {
  @Input('text')
  text: string = '';
  @Input()
  public myCallback: Function = () => {};
  @Input()
  public project: any = {};

  goal: any = 0;
  nameProject: string;
  addressProject: string;
  feature_image: string = '0';


  constructor(
    public navCtrl: NavController,
  ) {
    this.text = 'Hello World';
    this.text = 'Hello World';
  }

  public goDetail(){
    this.navCtrl.push('ProjectPage', {project: this.project});
  }

  public textEllipsis(str, maxLength, { side = "end", ellipsis = "..." } = {}) {
    if(str) {
    if (str.length > maxLength) {
      switch (side) {
        case "start":
          return ellipsis + str.slice(-(maxLength - ellipsis.length));
        case "end":
        default:
          return str.slice(0, maxLength - ellipsis.length) + ellipsis;
      }
    }
  }
    return str;
  }

  ngOnChanges() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })

    this.myCallback = this.myCallback;
    this.text = this.text;
    this.project = this.project;
    this.goal = formatter.format(Number(this.project.goal) || 0);
    this.nameProject = this.textEllipsis(this.project.name, 30);
     var rollDie = (Math.floor(Math.random() * (1 + 19 - 1)) + 1).toString();
     console.log("​ngOnChanges -> rollDie", rollDie)
    this.feature_image = rollDie.toString();

    if(this.project.location) {
      this.addressProject = this.textEllipsis(this.project.location.address, 30);
    }
  }
}
