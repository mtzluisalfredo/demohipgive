import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'info-item',
  templateUrl: 'info-item.html'
})
export class InfoItemComponent {
  @Input('imgSlider')
  imgSlider: string = '';
  @Input()
  public myCallback: Function = () => {};
  text: string;
  @Input()
  public project: any = {};
  @Input()
  public imgIndex: any;

  goal: any = 0;
  nameProject: string;
  addressProject: string;
  feature_image: string = '0';


  constructor(
    public navCtrl: NavController,
  ) {
    console.log('Hello InfoItemComponent Component');
    this.text = 'Hello World';
  }

  public goDetail(){
    this.navCtrl.push('ProjectPage', {project: this.project});
  }

  public getBackgroundStyle(i) {
    return 'assets/imgs/' + (i+1) + '.jpg';
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
    this.imgIndex = this.imgIndex;
    this.myCallback = this.myCallback;
    this.text = this.text;
    this.project = this.project;
    this.goal = formatter.format(Number(this.project.goal) || 0);
    this.nameProject = this.textEllipsis(this.project.name, 30);
    var numerRa = (Math.floor(Math.random() * (1 + 19 - 1)) + 1).toString();
    console.log("​ngOnChanges -> rollDie", numerRa)
    this.feature_image = numerRa.toString();
    if(this.project.location) {
      this.addressProject = this.textEllipsis(this.project.location.address, 30);
    }
  }
}
