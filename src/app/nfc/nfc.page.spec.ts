import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NfcPage } from './nfc.page';

describe('NfcPage', () => {
  let component: NfcPage;
  let fixture: ComponentFixture<NfcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NfcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
