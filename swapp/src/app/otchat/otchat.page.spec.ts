import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtchatPage } from './otchat.page';

describe('OtchatPage', () => {
  let component: OtchatPage;
  let fixture: ComponentFixture<OtchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
