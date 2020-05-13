import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarempresaadminPage } from './editarempresaadmin.page';

describe('EditarempresaadminPage', () => {
  let component: EditarempresaadminPage;
  let fixture: ComponentFixture<EditarempresaadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarempresaadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarempresaadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
