import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepBuscarComponent } from './cep-buscar.component';

describe('CepBuscarComponent', () => {
  let component: CepBuscarComponent;
  let fixture: ComponentFixture<CepBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
