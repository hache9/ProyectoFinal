import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarempresasadminPage } from './mostrarempresasadmin.page';

describe('MostrarempresasadminPage', () => {
  let component: MostrarempresasadminPage;
  let fixture: ComponentFixture<MostrarempresasadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarempresasadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarempresasadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
