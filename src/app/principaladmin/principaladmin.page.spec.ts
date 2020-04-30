import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrincipaladminPage } from './principaladmin.page';

describe('PrincipaladminPage', () => {
  let component: PrincipaladminPage;
  let fixture: ComponentFixture<PrincipaladminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipaladminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrincipaladminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
