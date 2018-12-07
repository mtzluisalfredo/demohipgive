import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';
import { ActionSheetController } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {

  mymodel: string;
  itemsLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  project: any = {}
  textHtml: string = '';
  feature_image: string;

  infoAbout: any = false;
  infoUpdates: any = false;
  infoDonors: any = false;
  listLevel: any = false;

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private videoPlayer: VideoPlayer) {
    this.project = this.navParams.get('project');
    this.textHtml = this.project.content;
    console.log("​ProjectPage -> constructor -> this.project", this.project)

  }

  ionViewWillEnter() {
    this.mymodel = "about"
    var rollDie = (Math.floor(Math.random() * (1 + 19 - 1)) + 1).toString();
    console.log("​ngOnChanges -> rollDie", rollDie)
    this.feature_image = rollDie.toString();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

  presentActionSheet() {
		console.log("​ProjectPage -> presentActionSheet -> presentActionSheet",this.actionSheetCtrl)
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share project',
      buttons: [
        {
          text: 'Twitter',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Facebook',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'get url',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }


  openListLevel() {
    console.log("​ProjectPage -> openListLevel -> openListLevel")
    this.listLevel = !this.listLevel;
  }

  presentAlert() {
    this.navCtrl.push('ProfilePage');
  }

  openAbout() {
    console.log("​ProjectPage -> open -> open")
    this.infoAbout = !this.infoAbout;
  }

  openUpdates() {
    console.log("infoUpdates -> infoUpdates -> open")
    this.infoUpdates = !this.infoUpdates;
  }

  openDonors() {
    console.log("infoUpdates -> infoUpdates -> open")
    this.infoDonors = !this.infoDonors;
  }

  openVideo() {
    this.videoPlayer.play('https://www.youtube.com/watch?v=lKZQdBOR-gY').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }

  pageBack() {
    this.navCtrl.pop()
  }

}
