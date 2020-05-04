import { AppRouting.ModuleModule } from './app-routing.module.module';

describe('AppRouting.ModuleModule', () => {
  let appRoutingModuleModule: AppRouting.ModuleModule;

  beforeEach(() => {
    appRoutingModuleModule = new AppRouting.ModuleModule();
  });

  it('should create an instance', () => {
    expect(appRoutingModuleModule).toBeTruthy();
  });
});
