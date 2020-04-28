import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavfilterComponent } from './favfilter.component';

describe('FavfilterComponent', () => {
  let component: FavfilterComponent;
  let fixture: ComponentFixture<FavfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavfilterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
