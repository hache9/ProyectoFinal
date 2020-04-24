import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaleryComponent } from './galery.component';

describe('GaleryComponent', () => {
  let component: GaleryComponent;
  let fixture: ComponentFixture<GaleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
