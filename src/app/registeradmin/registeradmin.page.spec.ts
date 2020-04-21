import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisteradminPage } from './registeradmin.page';

describe('RegisteradminPage', () => {
  let component: RegisteradminPage;
  let fixture: ComponentFixture<RegisteradminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteradminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisteradminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
