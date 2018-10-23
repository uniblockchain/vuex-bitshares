/* eslint-env jest */
import { createLocalVue } from 'vue-test-utils';
import Vuex from 'vuex';
import acc from '../src/modules/acc/';
import { getDefaultState } from '../src/modules/acc/defaultState';

jest.mock('../src/services/api/account.js');

const localVue = createLocalVue();
localVue.use(Vuex);

const initialState = getDefaultState()

describe('Assets module: getters', () => {
  let store;
  let state

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        acc
      }
    });
    state = store.state.acc;
  });

  test('has correct initial state', () => {
    expect(state).toEqual(getDefaultState())
  });

  test('has correct getters', () => {
    state.userId = '123'
    expect(store.getters['acc/getAccountUserId']).toBe('123');
    expect(store.getters['acc/getCurrentUserName']).toBe(null);
    state.userData = { account: { name: 'h0bb1t'} };
    expect(store.getters['acc/getCurrentUserName']).toBe('h0bb1t');

    expect(store.getters['acc/getUserBalances']).toEqual({});
    state.userData = { 
      balances: {
        '1.2.3': { balance: 100 },
        '1.2.5': { balance: 0 },
        '1.2.6': { balance: 2900 }
      }
    };
    expect(store.getters['acc/getUserBalances']).toEqual({
      '1.2.3': { balance: 100 },
      '1.2.6': { balance: 2900 }
    });

    expect(store.getters['acc/isLoggedIn']).toBe(true);
    state.userId = null;
    expect(store.getters['acc/isLoggedIn']).toBe(false);

    expect(store.getters['acc/getKeys']).toBe(null);
    state.keys = {
      active: '123',
      owner: null
    };
    expect(store.getters['acc/getKeys']).toBe(null);
    state.keys.owner = '555';
    expect(store.getters['acc/getKeys']).toEqual({
      active: '123',
      owner: '555'
    });
    // TODO: more tests for getKeys getter with decryption OR remove this getter
  });
});

describe('Assets module: mutations', () => {
  let state;

  beforeEach(() => {
    state = getDefaultState()
  });

  test('ACCOUNT_CLOUD_LOGIN', () => {
    acc.mutations.ACCOUNT_CLOUD_LOGIN(state, { userId: 'aaa', keys: { active: 1, owner: 2}});
    expect(state.userId).toBe('aaa');
    expect(state.keys).toEqual({ active: 1, owner: 2 });
    expect(state.userType).toBe('password');
  });

  test('ACCOUNT_BRAINKEY_LOGIN', () => {
    acc.mutations.ACCOUNT_BRAINKEY_LOGIN(state, { 
      userId: 'aaa', 
      wallet: { 
        passwordPubkey: 1, 
        encryptedBrainkey: 2,
        encryptionKey: 3,
        aesPrivate: 4
      } 
    });
    expect(state.userId).toBe('aaa');
    expect(state.wallet).toEqual({
      passwordPubkey: 1,
      encryptedBrainkey: 2,
      encryptionKey: 3,
      aesPrivate: 4
    });
    expect(state.userType).toBe('wallet');
  });

  test('ACCOUNT_SIGNUP', () => {
    acc.mutations.ACCOUNT_SIGNUP(state, {
      userId: 'aaa',
      wallet: {
        passwordPubkey: 1,
        encryptedBrainkey: 2,
        encryptionKey: 3,
        aesPrivate: 4
      }
    });
    expect(state.userId).toBe('aaa');
    expect(state.wallet).toEqual({
      passwordPubkey: 1,
      encryptedBrainkey: 2,
      encryptionKey: 3,
      aesPrivate: 4
    });
    expect(state.userType).toBe('wallet');
  });

  test('ACCOUNT_LOGOUT', () => {
    acc.mutations.ACCOUNT_LOGOUT(state);
    expect(state).toEqual(getDefaultState());
  });

  test('FETCH_CURRENT_USER', () => {
    acc.mutations.FETCH_CURRENT_USER(state, { data: { balances: [1,2,3], account: 'zzz' } });
    expect(state.userData).toEqual({ balances: [1, 2, 3], account: 'zzz' });
  });
});

describe('Assets module: actions', () => {
  let store, state;

  beforeEach(() => {
    // todo: debug deep clone module
    store = new Vuex.Store({
      modules: {
        acc
      }
    });
    state = store.state.acc
  });


  // test('Cloud login', async done => {
  //   const response = await store.dispatch('acc/cloudLogin', { name: 'h0bb1t', password: 'hzhzhz' });
  //   // TODO: ETC + create proper mock
  // });

  // test('Brainkey login', async done => {
  //   const response = await store.dispatch('acc/brainkeyLogin', { braikey: 'TEST_BRAINKEY_HERE', password: 'hzhzhz' });
  //   // TODO: ETC + create proper mock
  // });

  
  // test('File login', async done => {
  //   const response = await store.dispatch('acc/fileLogin', { backup: 'TEST_FILE_HERE', password: 'hzhzhz' });
  //   // TODO: ETC + create proper mock
  // });
  
  // test('Signs up with password', async done => {
  //   const response = await store.dispatch('acc/signupWithPassword', { name: 'h0bb1t', password: 'hzhzhz' });
  //   // TODO: ETC + create proper mock
  // });

  // test('Signs up with brainkey', async done => {
  //   const response = await store.dispatch('acc/signupBrainkey', { name: 'h0bb1t', password: 'hzhzhz', dictionary: 'zazaza' });
  //   // TODO: ETC + create proper mock
  // });

  test('Logout', () => {
    store.dispatch('acc/logout');
    expect(state).toEqual(getDefaultState());
    // TODO: ETC + create proper mock
  });

  // test('Fetches current user data', async done => {
  //   const response = await store.dispatch('acc/fetchCurrentUser');
  //   // TODO: ETC + create proper mock
  // });


});
