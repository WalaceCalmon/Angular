import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAddIntesComponent } from './todo-input-add-intes.component';

describe('TodoInputAddIntesComponent', () => {
  let component: TodoInputAddIntesComponent;
  let fixture: ComponentFixture<TodoInputAddIntesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputAddIntesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputAddIntesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
