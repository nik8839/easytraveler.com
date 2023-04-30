import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalplacesComponent } from './culturalplaces.component';

describe('CulturalplacesComponent', () => {
  let component: CulturalplacesComponent;
  let fixture: ComponentFixture<CulturalplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturalplacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturalplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
