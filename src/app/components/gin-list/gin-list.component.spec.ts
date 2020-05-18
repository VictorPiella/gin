import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GinListComponent } from './gin-list.component';

describe('GinListComponent', () => {
  let component: GinListComponent;
  let fixture: ComponentFixture<GinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
