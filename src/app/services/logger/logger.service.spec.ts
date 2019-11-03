import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

  describe('LoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggerService = TestBed.get(LoggerService);
    expect(service).toBeTruthy();
  });

  describe('Write log', () => {
    it('should ',  () => {
      const service: LoggerService = TestBed.get(LoggerService);
      service.consoleLog('Test', 'consoleLog', 'Message');
    });
  });
});
