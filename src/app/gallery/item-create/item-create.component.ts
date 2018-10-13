import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../HttpClientService';
import {Router} from '@angular/router';
import {Pet} from '../gallery.component';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  pet: Pet = new Pet();
  constructor(
    private service: HttpClientService,
    private router: Router
    ) { }

  createItem() {
    const newPet = new Pet();
    newPet.setData(this.pet.id, this.pet.url, this.pet.title);
    this.service.newRecord(newPet).subscribe(() => {
      this.router.navigate(['']);
      this.pet = new Pet();
    }
    );
  }

  ngOnInit() {
  }

}
