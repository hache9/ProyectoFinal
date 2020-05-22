import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterempresasadminComponent } from './filterempresasadmin.component';

describe('FilterempresasadminComponent', () => {
  let component: FilterempresasadminComponent;
  let fixture: ComponentFixture<FilterempresasadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterempresasadminComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterempresasadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
