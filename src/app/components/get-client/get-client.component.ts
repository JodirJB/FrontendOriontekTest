import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client',
  templateUrl: './get-client.component.html',
  styleUrls: ['./get-client.component.css']
})
export class GetClientComponent implements OnInit {
  clients: Client[] = [];

  constructor( private addressService: AddressService ) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.addressService.getClients().subscribe(data => {
      console.log(data);
      this.clients = data;
    }, error => {
      console.log(error);
    });
  }

  deleteClient(id: any) {
    this.addressService.deleteClient(id).subscribe(data => {
      console.log(data);
      alert('Cliente eliminado correctamente');
      this.getClients();
    }, error => {
      console.log(error);
    });
  }

  // getClient(id: any) {
  //   this.addressService.deleteClient(id).subscribe(data => {
  //     console.log(data);
  //     alert('Cliente editado correctamente');
  //     this.getClients();
  //   }, error => {
  //     console.log(error);
  //   });
  // }

}
