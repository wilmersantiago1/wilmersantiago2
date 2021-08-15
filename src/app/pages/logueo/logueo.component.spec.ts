import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogueoComponent } from './logueo.component';

describe('LogueoComponent', () => {
  let component: LogueoComponent;
  let fixture: ComponentFixture<LogueoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogueoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogueoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
