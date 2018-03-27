import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseTokenDialogComponent } from './purchase-token-dialog.component';

describe('PurchaseTokenDialogComponent', () => {
  let component: PurchaseTokenDialogComponent;
  let fixture: ComponentFixture<PurchaseTokenDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseTokenDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseTokenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
