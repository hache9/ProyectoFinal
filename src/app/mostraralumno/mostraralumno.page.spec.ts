import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostraralumnoPage } from './mostraralumno.page';

describe('MostraralumnoPage', () => {
  let component: MostraralumnoPage;
  let fixture: ComponentFixture<MostraralumnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostraralumnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostraralumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
