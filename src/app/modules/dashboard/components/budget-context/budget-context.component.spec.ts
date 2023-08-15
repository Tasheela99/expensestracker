import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetContextComponent } from './budget-context.component';

describe('BudgetContextComponent', () => {
  let component: BudgetContextComponent;
  let fixture: ComponentFixture<BudgetContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetContextComponent]
    });
    fixture = TestBed.createComponent(BudgetContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
