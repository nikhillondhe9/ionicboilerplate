import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import {ModalPage} from '../modal/modal';
import {ActionSheetController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl:NavController, public modal:ModalController, public actionSheetCtrl: ActionSheetController) {

  }
  name: string
  openModal(){
    const mModal = this.modal.create('ModalPage', {name: this.name});

    mModal.present();
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'About',
      buttons: [
        {

          text:'More information',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{

          text: 'Sources',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


}
