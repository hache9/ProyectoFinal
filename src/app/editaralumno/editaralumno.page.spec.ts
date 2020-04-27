import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditaralumnoPage } from './editaralumno.page';

describe('EditaralumnoPage', () => {
  let component: EditaralumnoPage;
  let fixture: ComponentFixture<EditaralumnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaralumnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditaralumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
