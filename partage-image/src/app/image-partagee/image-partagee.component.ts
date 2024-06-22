import { Component, Input, OnInit } from '@angular/core';
import { ImagePartagee } from '../models/image-partagee';
import { NgStyle, NgClass, DatePipe } from '@angular/common'

@Component({
  selector: 'app-image-partagee',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    DatePipe
  ],
  templateUrl: './image-partagee.component.html', 
  styleUrl: './image-partagee.component.scss'
})
export class ImagePartageeComponent implements OnInit {
  @Input() imagePartagee!: ImagePartagee;

  isLiked!: boolean;
  likeButtonText!: string;
  myPercent : number = 744.465

  constructor(private imagePartageeService: )

  ngOnInit() {
    this.isLiked = false
    this.likeButtonText = "Like"
  }

  onAddLike(): void { 
    if (this.isLiked == false) {
      this.Like()
    } else if (this.isLiked == true) {
      this.Unlike()
    }
  }

  Like() {
    this.imagePartageeService.imagePartageeLikeById(this.imagePartagee.id);
    this.isLiked = true;
    this.likeButtonText = "Liked"
  }

  Unlike() {
    this.imagePartagee.removeLike();
    this.isLiked = false
    this.likeButtonText = "Like"
  }
}
