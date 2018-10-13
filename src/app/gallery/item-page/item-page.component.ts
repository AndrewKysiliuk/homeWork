import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../HttpClientService';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../gallery.component';
@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  itemId: number;
  pet: Pet;

  constructor(private ar: ActivatedRoute, private service: HttpClientService) { }

  ngOnInit() {
    this.ar.params.subscribe(data => this.itemId = data.id);
    this.service.getById(this.itemId).subscribe((data: Pet) => this.pet = data);
  }
}
