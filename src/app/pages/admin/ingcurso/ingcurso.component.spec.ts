import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngcursoComponent } from './ingcurso.component';

describe('IngcursoComponent', () => {
  let component: IngcursoComponent;
  let fixture: ComponentFixture<IngcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngcursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
