import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeuperfilPage } from './meuperfil.page';

describe('MeuperfilPage', () => {
  let component: MeuperfilPage;
  let fixture: ComponentFixture<MeuperfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuperfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeuperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
