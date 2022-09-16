import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change username', async () => {
    let fakeResp = new Response('{"id":"test"}',
      {status:200}
    );
    spyOn(window, 'fetch').and.resolveTo(fakeResp);
    expect(await service.changeUsername(0,"")).toBeTrue();
  });

  it('should not change username bad response', async () => {
    spyOn(window, 'fetch').and.resolveTo();
    expect(await service.changeUsername(0,"")).toBeFalse();
  });

  it('should change email', async () => {
    let fakeResp = new Response('{"id":"test"}',
      {status:200}
    );
    spyOn(window, 'fetch').and.resolveTo(fakeResp);
    expect(await service.changeEmail(0,"")).toBeTrue();
  });

  it('should not change email bad response', async () => {
    spyOn(window, 'fetch').and.resolveTo();
    expect(await service.changeEmail(0,"")).toBeFalse();
  });

});
