import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-customer-addresses',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  clientForm: FormGroup;
  title: string = 'Agregar cliente';
  id: string | null;

  constructor( private formBuilder: FormBuilder, 
               private router: Router, 
               private addressService: AddressService,
               private activatedRoute: ActivatedRoute ) {
    this.clientForm = this.formBuilder.group({
      client: ['', Validators.required],
      address: ['', Validators.required]
    }); 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.isUpdateClient();
  }

  saveClient() {
    const CLIENT: Client = {
      client: this.clientForm.get('client').value,
      address: this.clientForm.get('address').value
    }

    if (this.id !== null) {
      this.addressService.updateClient(this.id, CLIENT).subscribe(data => {
        alert('Cliente editado correctamente');
        this.router.navigate(['/']); 
      }, error => {
        console.log(error);
        this.clientForm.reset();
      });
    } else {
      this.addressService.saveClient(CLIENT).subscribe(data => {
        alert('Cliente guardado correctamente');
        this.router.navigate(['/']); 
      }, error => {
        console.log(error);
        this.clientForm.reset();
      });
    }
  }

  isUpdateClient() {
    if (this.id !== null) {
        this.title = 'Editar cliente';
        this.addressService.getClient(this.id).subscribe(data => {
          this.clientForm.setValue({
            client: data.client,
            address: data.address
          });
      });
    }
  }
}

