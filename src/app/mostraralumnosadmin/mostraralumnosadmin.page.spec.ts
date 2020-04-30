import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostraralumnosadminPage } from './mostraralumnosadmin.page';

describe('MostraralumnosadminPage', () => {
  let component: MostraralumnosadminPage;
  let fixture: ComponentFixture<MostraralumnosadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostraralumnosadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostraralumnosadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
