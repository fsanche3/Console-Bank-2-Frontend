import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';

fdescribe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[AccountService]
    });
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should apply intrest and return true', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:200}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.applyIntrest(0)).toBeTrue();
  });

  it('should not apply intrest and return false', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:404}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.applyIntrest(0)).toBeFalse();
  });

  it('should deposit Savings and return true', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:200}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.depositSaving(0,0)).toBeTrue();
  });

  it('should not deposit Savings and return false', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:404}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.depositSaving(0,0)).toBeFalse();
  });

  it('should deposit Checkings and return true', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:200}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.depositChecking(0,0)).toBeTrue();
  });

  it('should not deposit Checkings and return false', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:404}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.depositChecking(0,0)).toBeFalse();
  });

  it('should withdrawl Checkings and return true', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:200}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.withdrawlChecking(0,0)).toBeTrue();
  });

  it('should not withdrawl Checkings and return false', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:404}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.withdrawlChecking(0,0)).toBeFalse();
  });

  it('should withdrawl Savings and return true', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:200}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.withdrawlSaving(0,0)).toBeTrue();
  });

  it('should not withdrawl Savings and return false', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:404}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.withdrawlSaving(0,0)).toBeFalse();
  });

  it('should delete Savings and return true', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:200}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.deleteSavings(0)).toBeTrue();
  });

  it('should not delete Savings and return false', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:404}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.deleteSavings(0)).toBeFalse();
  });

  it('should delete Checkings and return true', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:200}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.deleteCheckings(0)).toBeTrue();
  });

  it('should not delete Checkings and return false', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:404}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.deleteCheckings(0)).toBeFalse();
  });

  it('should create Checkings and return true', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:200}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.createCheckings(0, "")).toBeTrue();
  });

  it('should not create Checkings and return false', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:404}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.createCheckings(0, "")).toBeFalse();
  });

  it('should create Savings and return true', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:200}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.createSavings(0, 1.0,"")).toBeTrue();
  });

  it('should not create Savings and return false', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:404}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.createSavings(0,1.0, "")).toBeFalse();
  });

  it('should return Savings accounts', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:200}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.getSavingAccounts()).toBeTruthy();
  });

  it('should return Checkings accounts', async () => {
    let fakeResp = new Response('{"id":"test"}',
    {status:200}
  );
  spyOn(window, 'fetch').and.resolveTo(fakeResp);
  expect(await service.getCheckingAccounts()).toBeTruthy();
  });

});
