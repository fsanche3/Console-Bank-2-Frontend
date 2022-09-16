import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionService]
    });
    service = TestBed.inject(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set accountType to a boolean value', ()=>{
    service.accountType = false;
    service.setAccountType(true)
    expect(service.accountType).toBeTrue();
  });

  it('should get accountType', ()=>{
    service.setAccountType(true)
    expect(service.getAccountType()).toBeTruthy();
  });

  it('should set savingId', ()=>{
    service.setSavingId(8);
    expect(service.savingId).toBe(8);
  });

  it('should get savingId', ()=>{
    service.savingId = 7;
    expect(service.getSavingId()).toBe(7);
  });

  it('should set checkingId', ()=>{
    service.setCheckingId(8);
    expect(service.checkingId).toBe(8);
  });

  it('should get checkingId', ()=>{
    service.checkingId = 7;
    expect(service.getCheckingId()).toBe(7);
  });

  it('should get checking Transactions', ()=>{
    let fakeResp = new Response('{"id":"test"}',
      {status:200}
    );
    spyOn(window, 'fetch').and.resolveTo(fakeResp);
    expect(service.getCheckingTransaction(0)).toBeTruthy();
  });

  it('should not get checking Transactions', async ()=>{
    let fakeResp = new Response('{"id":"test"}',
      {status:404}
    );
    spyOn(window, 'fetch').and.resolveTo(fakeResp);

    expect(await service.getCheckingTransaction(0)).toBeFalse();
  });

  it('should get saving Transactions', ()=>{
    let fakeResp = new Response('{"id":"test"}',
      {status:200}
    );
    spyOn(window, 'fetch').and.resolveTo(fakeResp);
    expect(service.getSavingTransaction(0)).toBeTruthy();
  });

  it('should not get saving Transactions', async ()=>{
    let fakeResp = new Response('{"id":"test"}',
      {status:404}
    );
    spyOn(window, 'fetch').and.resolveTo(fakeResp);

    expect(await service.getSavingTransaction(0)).toBeFalse();
  });

});
