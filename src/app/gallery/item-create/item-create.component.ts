import { Component } from '@angular/core';
import { HttpClientService } from '../../HttpClientService';
import { Router } from '@angular/router';
import { Pet } from '../../Pet';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent{
  pet: Pet = new Pet();
  constructor(
    private service: HttpClientService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  createItem() {
    const newPet = new Pet(this.pet.id, this.pet.url, this.pet.title);
    this.service.newRecord(newPet).subscribe(() => {
      this.router.navigate(['/gallery']);
      this.pet = new Pet();
    }
    );
  }
  openSnackBar(text: string) {
    this.snackBar.open(`New item: '${this.pet.title}' was created`, 'close', {
      duration: 2000
    });
  }
}
