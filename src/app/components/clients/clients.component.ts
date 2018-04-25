import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../modals/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];
  totalNumber: number;
  constructor( public clientService: ClientService ) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      console.log(this.clients);
    });
  }

  getTotal() {
    // let total = 0;
    // for (let i = 0; i < this.clients.length; i++) {
    //   const element = this.clients[i];
    //   total = i + total;
    // }
    this.totalNumber = this.clients.length;
    console.log(this.totalNumber);

  }

}
