import { inject, TestBed } from '@angular/core/testing';
import {  HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
  });
  it(
    'should get users',
    inject(
      [HttpTestingController, UserService],
      (httpMock: HttpTestingController, dataService: UserService) => {
        const mockUsers = [
          { id: 0, name: 'Alice', img: 'image', username: 'Alice' },
        ];

        dataService.getUsers().subscribe((event) => {
          expect(event).toEqual(mockUsers);
        });
      }
    )
  );
});
