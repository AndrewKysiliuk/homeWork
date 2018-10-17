import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}
  authorText: string;
  status = false;

  authorization() {
    if (this.status) {
      this.status = !this.status;
      this.authorText = 'Enter';
      this.authService.update(this.status);
      this.router.navigate(['']);
    } else {
      this.status  = !this.status;
      this.authorText = 'Exit';
      this.authService.update(this.status);
    }
  }

  ngOnInit(): void {
    this.authService.getStatus().subscribe(data => this.status = data);
    if (this.status) {
      this.authorText = 'Exit';
    } else {
      this.authorText = 'Enter';
    }
  }
}

