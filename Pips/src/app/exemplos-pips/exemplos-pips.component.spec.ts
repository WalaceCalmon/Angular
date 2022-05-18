import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplosPipsComponent } from './exemplos-pips.component';

describe('ExemplosPipsComponent', () => {
  let component: ExemplosPipsComponent;
  let fixture: ComponentFixture<ExemplosPipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplosPipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplosPipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
