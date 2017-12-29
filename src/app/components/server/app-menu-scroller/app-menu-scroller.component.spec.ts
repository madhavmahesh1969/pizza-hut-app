import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenuScrollerComponent } from './app-menu-scroller.component';

describe('AppMenuScrollerComponent', () => {
  let component: AppMenuScrollerComponent;
  let fixture: ComponentFixture<AppMenuScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMenuScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
