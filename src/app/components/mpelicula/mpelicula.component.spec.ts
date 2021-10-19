import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpeliculaComponent } from './mpelicula.component';

describe('MpeliculaComponent', () => {
  let component: MpeliculaComponent;
  let fixture: ComponentFixture<MpeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
