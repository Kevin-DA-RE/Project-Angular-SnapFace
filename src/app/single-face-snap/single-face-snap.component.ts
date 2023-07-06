import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps-services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnap;
  buttonText!: string

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute){}
  



  ngOnInit(){
    const snapid = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapid);
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
