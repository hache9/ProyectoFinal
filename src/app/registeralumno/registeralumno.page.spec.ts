import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisteralumnoPage } from './registeralumno.page';

describe('RegisteralumnoPage', () => {
  let component: RegisteralumnoPage;
  let fixture: ComponentFixture<RegisteralumnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteralumnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisteralumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
