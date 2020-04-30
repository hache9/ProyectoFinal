import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditaralumnoadminPage } from './editaralumnoadmin.page';

describe('EditaralumnoadminPage', () => {
  let component: EditaralumnoadminPage;
  let fixture: ComponentFixture<EditaralumnoadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaralumnoadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditaralumnoadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
