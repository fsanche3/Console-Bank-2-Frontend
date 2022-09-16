import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { AnimationDriver } from '@angular/animations/browser';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Login the user', async () => {
    let fakeResp = new Response('{"id":"test"}',
      {status:200, headers:new Headers({'Auth':'test'})}
    );
    spyOn(window, 'fetch').and.resolveTo(fakeResp);
    expect(service.login("","")).toBeTruthy();
  });

  it('should not Login the user http', async () => {
    let fakeResp = new Response(null,
      {status:404}
    );
    spyOn(window, 'fetch').and.resolveTo(fakeResp);
    expect(await service.login("","")).toBeFalse();
  });

  it('should not Login the user credentials', async () => {
    let fakeResp = new Response('null',
      {status:404}
    );
    spyOn(window, 'fetch').and.resolveTo(fakeResp);
    expect(await service.login("","")).toBeFalse();
  });

  it('should logout', async () => {
    service.loggedInUser = {};
    spyOn(sessionStorage,'removeItem').and.callFake(()=>{/*empty*/});
    service.logOut();
    expect(await service.loggedInUser).toBeFalsy();
  });

  it('should get and set loggenInUser', async () => {
    service.loggedInUser = {};
    let fakeResp = new Response('{"id":"test"}',
    {status:200, headers:new Headers({'Auth':'test'})}
  );
    spyOn(window, 'fetch').and.resolveTo(fakeResp);
    spyOn(sessionStorage,'getItem').and.returnValue("test");
    await service.getUser();

    expect(service.loggedInUser).toBeTruthy();
  });

  it('should get and set loggedInUser if not already', async () => {
    service.loggedInUser = null;  
    spyOn(service, 'getUser').and.resolveTo();
    await service.getLoggedInUser();

    expect(service.getUser).toHaveBeenCalledTimes(1);
  });


  it('should add user successfully', () => {
    expect(service.register("","","","")).toBeTruthy();
  });



});
