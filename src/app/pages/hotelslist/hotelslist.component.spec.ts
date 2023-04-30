import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelslistComponent } from './hotelslist.component';

describe('HotelslistComponent', () => {
  let component: HotelslistComponent;
  let fixture: ComponentFixture<HotelslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
