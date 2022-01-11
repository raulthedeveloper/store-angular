import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreUiComponent } from './store-ui.component';

describe('StoreUiComponent', () => {
  let component: StoreUiComponent;
  let fixture: ComponentFixture<StoreUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
