import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalplaceComponent } from './historicalplace.component';

describe('HistoricalplaceComponent', () => {
  let component: HistoricalplaceComponent;
  let fixture: ComponentFixture<HistoricalplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalplaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
