import { Component } from '@angular/core';
import { ImagePartageeListComponent } from './image-partagee-list/image-partagee-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ImagePartageeListComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
