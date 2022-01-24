import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCategorySelectorComponent } from './mini-category-selector.component';

describe('MiniCategorySelectorComponent', () => {
  let component: MiniCategorySelectorComponent;
  let fixture: ComponentFixture<MiniCategorySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCategorySelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCategorySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
