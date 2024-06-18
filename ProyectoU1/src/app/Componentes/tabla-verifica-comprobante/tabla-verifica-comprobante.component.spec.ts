import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVerificaComprobanteComponent } from './tabla-verifica-comprobante.component';

describe('TablaVerificaComprobanteComponent', () => {
  let component: TablaVerificaComprobanteComponent;
  let fixture: ComponentFixture<TablaVerificaComprobanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaVerificaComprobanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaVerificaComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
