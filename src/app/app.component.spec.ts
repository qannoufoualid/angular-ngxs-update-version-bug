import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NgxsModule} from '@ngxs/store';
import {AppState} from './app.state';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([AppState])
      ],
      declarations: [
        AppComponent
      ]
    }).overrideTemplate(AppComponent, '');
  });

  it('should display default connected user', fakeAsync(() => {

    // given
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    // when
    component.ngOnInit();
    tick();

    // then
    expect(component.connectedUserName).toEqual('zozo');
  }));
});
