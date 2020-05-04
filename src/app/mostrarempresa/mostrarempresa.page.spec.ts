import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarempresaPage } from './mostrarempresa.page';

describe('MostrarempresaPage', () => {
  let component: MostrarempresaPage;
  let fixture: ComponentFixture<MostrarempresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarempresaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
