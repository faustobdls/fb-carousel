import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbCarouselComponent } from './fb-carousel.component';

describe('FbCarouselComponent', () => {
  let component: FbCarouselComponent;
  let fixture: ComponentFixture<FbCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
