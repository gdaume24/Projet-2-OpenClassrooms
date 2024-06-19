import { Component, OnInit } from '@angular/core';
import { ImagePartageeComponent } from '../image-partagee/image-partagee.component';
import { ImagePartagee } from '../models/image-partagee';
import { ImagePartageesService } from '../services/image-partagees.service';

@Component({
  selector: 'app-image-partagee-list',
  standalone: true,
  imports: [
    ImagePartageeComponent
  ],
  templateUrl: './image-partagee-list.component.html',
  styleUrl: './image-partagee-list.component.scss'
})
export class ImagePartageeListComponent implements OnInit {

  imagePartageeList!: ImagePartagee[];

  constructor(private imagePartageesService: ImagePartageesService) {}

  ngOnInit(): void {
    this.imagePartageeList = this.imagePartageesService.getImagePartagees();
  }
}
