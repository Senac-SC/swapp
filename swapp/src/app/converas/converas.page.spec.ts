import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConverasPage } from './converas.page';

describe('ConverasPage', () => {
  let component: ConverasPage;
  let fixture: ComponentFixture<ConverasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConverasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConverasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
