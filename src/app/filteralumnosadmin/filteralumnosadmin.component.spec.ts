import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilteralumnosadminComponent } from './filteralumnosadmin.component';

describe('FilteralumnosadminComponent', () => {
  let component: FilteralumnosadminComponent;
  let fixture: ComponentFixture<FilteralumnosadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteralumnosadminComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilteralumnosadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
