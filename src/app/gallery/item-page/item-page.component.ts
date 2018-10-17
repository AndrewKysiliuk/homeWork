import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Pet} from '../../Pet';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  pet: Pet = null;

  constructor(private ar: ActivatedRoute) { }

  ngOnInit() {
    this.ar.data.subscribe(data => this.pet = data.item);
  }
}
