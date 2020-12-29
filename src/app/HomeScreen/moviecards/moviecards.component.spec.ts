import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecardsComponent } from './moviecards.component';

describe('MoviecardsComponent', () => {
  let component: MoviecardsComponent;
  let fixture: ComponentFixture<MoviecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviecardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
