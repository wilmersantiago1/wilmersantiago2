import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestcursosComponent } from './gestcursos.component';

describe('GestcursosComponent', () => {
  let component: GestcursosComponent;
  let fixture: ComponentFixture<GestcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestcursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
