import {UserInfo} from '../src/logic';
import {exportAllDeclaration} from '@babel/types';

describe('UserInfo', () => {

  test('User enters name.', () => {
    let newUser = new UserInfo(28);
    expect(newUser.name).toEqual("");
  });
});