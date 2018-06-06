import { FuncButtonsModule } from './funcbuttons.module';

describe('FuncbuttonsModule', () => {
  let funcbuttonsModule: FuncButtonsModule;

  beforeEach(() => {
    funcbuttonsModule = new FuncButtonsModule();
  });

  it('should create an instance', () => {
    expect(funcbuttonsModule).toBeTruthy();
  });
});
