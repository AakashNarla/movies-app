import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'videos-embed',
  templateUrl: './videos-embed.component.html',
  styleUrls: ['./videos-embed.component.scss']
})
export class VideosEmbedComponent implements OnInit {
  @Input() site: string = 'Youtube';
  @Input() key: string | null = null;

  videoUrl: SafeResourceUrl = '';
  constructor(private santizer: DomSanitizer) {}

  ngOnInit(): void {
    switch (this.site) {
      case 'Vimeo':
        this.videoUrl = this.getSafeUrl('https://www.vimeo.com/embed/' + this.key);
        break;
      default:
        this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/' + this.key);
        break;
    }
  }

  getSafeUrl(url: string) {
    return this.santizer.bypassSecurityTrustResourceUrl(url);
  }
}
