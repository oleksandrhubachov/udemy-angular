import {
  Component,
  Input,
  OnInit,
  OnChanges,
  ViewEncapsulation,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges call');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit call');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck call');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit call');
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked call');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked call');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit call');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy call');
  }

}
