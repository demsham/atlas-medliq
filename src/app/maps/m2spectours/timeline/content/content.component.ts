import { ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { VisibilityDetector } from '../visibility-detector';

@Component({
  selector: 'app-spectours-timeline-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit, AfterViewInit {

  @Input() item;
  @Output() mapView = new EventEmitter<any>();

  contentType = '';
  content = null;
  contentVisible = false;
  active = false;
  visibleDetector: VisibilityDetector;
  activeDetector: VisibilityDetector;

  constructor(private el: ElementRef) {
    this.visibleDetector = new VisibilityDetector();
    this.activeDetector = new VisibilityDetector();
  }

  ngOnInit(): void {
    this.activeDetector.detected.subscribe((active) => {
      console.log('CONTENT ACTIVE', active, this.item);
      this.active = active;
      if (active) {
        this.handleGeo();
      }
    });
    this.visibleDetector.detected.subscribe((visible) => {
      console.log('CONTENT VISIBLE', visible, this.item);
      this.contentVisible = visible;
    });
    if (this.item.content && this.item.content.length) {
      this.content = this.item.content[0];
      this.contentType = this.content.type;
      console.log('CTCT', this.contentType);
    }
  }

  ngAfterViewInit() {
    const el: HTMLElement = this.el.nativeElement;
    this.visibleDetector.initVisibilityDetector(el, el.parentElement, 'visible');
    this.activeDetector.initVisibilityDetector(el, el.parentElement, 'active');
  }

  handleGeo() {
    let mapView = null;
    for (const content of this.item.content) {
      if (content.map_view && content.map_view.length) {
        mapView = content.map_view[0];
        this.mapView.next(mapView);
        break;
      }
    }

  }
}