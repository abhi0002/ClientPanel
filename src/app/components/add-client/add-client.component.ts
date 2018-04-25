import { ClientService } from './../../services/client.service';
import { Client } from './../../modals/Client';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';



@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  constructor(private _flashMessagesService: FlashMessagesService,
              public router: Router,
              public clientService: ClientService) { }

  client: Client = {
                      email: '',
                      firstName: '',
                      gender: '',
                      lastName: '',
                      id: '',
                      mobile: null,
                      password: ''
                    };
  disableIdOnAdd = true;
  genders = ['male' , 'female'];
// TUTORIAL
  // onSubmit({value}: {value: Client, valid: boolean}) {
  //   console.log(value);
  // }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    console.log(value);
    if (!valid) {
      this._flashMessagesService.show('Please Fill in the Fields', {cssClass: 'alert-danger', timeOut: '3000'});
      this.router.navigate(['add-client']);
    } else {
      console.log('Valid');
      this.clientService.newClient(value);
      this._flashMessagesService.show('New Client Added', {cssClass: 'alert-success', timeOut: '3000'});
      this.router.navigate(['/']);
    }
  }


  ngOnInit() {
    // this._flashMessagesService.show('We are in about component!', { cssClass: 'alert-success', timeout: 1000 });

  }

}
