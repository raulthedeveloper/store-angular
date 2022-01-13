import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryUiComponent } from './category-ui.component';

describe('CategoryUiComponent', () => {
  let component: CategoryUiComponent;
  let fixture: ComponentFixture<CategoryUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
