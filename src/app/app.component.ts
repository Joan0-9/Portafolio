import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Portafolio';

  constructor(private router: Router){
  }
  
  renderAboutMe(){
    this.router.navigate(['app-about']);
  }

  renderProject(){
    this.router.navigate(['app-project']);
  }

  renderContact(){
    this.router.navigate(['app-contact']);
  }

}
