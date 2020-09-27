import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoUrl: string;
  @Input() videoDescription: string;
  constructor() { }

  ngOnInit(): void {
  }
}
