import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterempresaPage } from './registerempresa.page';

describe('RegisterempresaPage', () => {
  let component: RegisterempresaPage;
  let fixture: ComponentFixture<RegisterempresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterempresaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
