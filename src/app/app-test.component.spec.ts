import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AppTestAppComponent } from '../app/app-test.component';

beforeEachProviders(() => [AppTestAppComponent]);

describe('App: AppTest', () => {
  it('should create the app',
      inject([AppTestAppComponent], (app: AppTestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'app-test works!\'',
      inject([AppTestAppComponent], (app: AppTestAppComponent) => {
    expect(app.title).toEqual('app-test works!');
  }));
});
