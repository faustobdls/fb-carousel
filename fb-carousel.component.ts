import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'fb-carousel',
  templateUrl: './fb-carousel.component.html',
  styleUrls: ['./fb-carousel.component.scss']
})
export class FbCarouselComponent implements OnInit {

  constructor() { }

  @Input('slides') banners: any[];
  @Input('delay') delay: number; 
  @Input('arows') arow: any;

  position: number = 0;

  private _timer;
  private _subscription: Subscription;

  hover: boolean = false;

  banners2: any[] = [
    { id: 0, bg: '/assets/banner.jpg', title: 'Banner 1', exibir_title: false },
    { id: 1, bg: '/assets/banner.jpg', title: 'Banner 2', exibir_title: false },
    { id: 2, bg: '/assets/banner.jpg', title: 'Banner 3', exibir_title: false },
    { id: 3, bg: '/assets/banner.jpg', title: 'Banner 4', exibir_title: false },
  ];
  selected: any = null;
  
  ngOnInit() {
    this.selected = this.getSelected(this.position);
    this.start();
  }
  start(){
    this._timer = Observable.timer(this.delay, this.delay);
    this._subscription = this._timer.subscribe(() => this.left());
  }
  stop(){
    this._subscription.unsubscribe();
  }
  left(){
    if(this.position > 1 + -this.banners.length){
      this.position--;
    }else{
      this.position = 0;
    }
    this.selected = this.getSelected(this.position);
  }
  getSelected(position){
    return this.banners.filter( (item) => {
      if(item.id == -position){
        return item;
      }
    } ).pop();
  }
  goTo(ir){
    this.position = -ir;
  }
  right(){
    if(this.position < 0){
      this.position++;
    }else{
      this.position = 1 + -this.banners.length;
    }
    this.selected = this.getSelected(this.position);
  }
  monitoring(pos, bullet){
    console.log(pos, bullet);
    
  }

}
