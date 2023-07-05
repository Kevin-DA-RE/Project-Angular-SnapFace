import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps-services'
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService){}
  
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string


  ngOnInit(){
    this.buttonText = "Oh Snap!";
  }
  
  onSnap(){
    this.buttonText === "Oh Snap!" ? (
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap'),
    this.faceSnap.snaps++, this.buttonText = 'Oups Snap'
      ): 
      (this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap'),
      this.faceSnap.snaps--, this.buttonText = 'Oh Snap!')
  }

}
