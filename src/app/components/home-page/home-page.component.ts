import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  selectedFile = null;
  imageHead = 'assets/images/logo.png';
  public imageSources: string[] = [
    'assets/images/1_P7x-_0XfQz6CVmMY_QAv0w.png',
    'assets/images/Welcome-3d-Text-Picture.jpg',
    'assets/images/Welcome-Confetti-Vector.png'
 ];
  image1 = 'assets/images/Welcome-3d-Text-Picture.jpg';
  image2 = 'assets/images/lms.jpg';
  image3 = 'assets/images/partnerships-in-ad-agency-client-relationship-at-theoutsideviewblog-com-e1330033501754.jpg';

  constructor(private http: HttpClient) {
    // this.image1 = 'assets/images/1_P7x-_0XfQz6CVmMY_QAv0w.png';
    // this.image2 = 'assets/images/Welcome-3d-Text-Picture.jpg';
    // this.image3 = 'assets/images/Welcome-Confetti-Vector.png';


  }

  ngOnInit() {
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
  }
}
