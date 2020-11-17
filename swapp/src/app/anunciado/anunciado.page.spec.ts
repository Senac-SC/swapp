import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnunciadoPage } from './anunciado.page';

describe('AnunciadoPage', () => {
  let component: AnunciadoPage;
  let fixture: ComponentFixture<AnunciadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnunciadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
