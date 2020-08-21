import { testSaga, expectSaga } from "redux-saga-test-plan";
import { reducer, StoreState } from "store/reducer";
import { reinitAction } from "smart/ConwayLife/saga";
import {
  clearSession,
  restoreSession,
  sagaLoginAction,
  saveSession,
  workerSagaLogin, workerSagaLogout,
  workerSagaRestoreSession
} from "smart/ConnectedLogin/saga";
import {userSlice} from "smart/ConnectedLogin/slice";

const initialState: StoreState = {
  conwayField: [],
  user: {
    username: null,
  },
  conwaySettings: {
    fieldWidth: 20,
    fieldHeight: 20,
    cellSize: 10,
    animationDelay: 50,
    alivePercent: 30,
    animationStepsCount: 4,
  },
};

describe("User saga", () => {
  it("Restore saga unit test", () => {
    testSaga(workerSagaRestoreSession)
      .next()
      .call(restoreSession)
      .next({ username: "Bob" })
      .put(userSlice.actions.login("Bob"))
      .next()
      .put(reinitAction())
      .next()
      .isDone();
  });
  it("Restore saga integration test", () => {
    const username = "Bob";
    localStorage.setItem("user", JSON.stringify({ username }));
    const expectedFinalStoreState = {
      ...initialState,
      user: {
        username
      },
    };
    return expectSaga(workerSagaRestoreSession)
      .withReducer(reducer, { ...initialState })
      .hasFinalState(expectedFinalStoreState)
      .run();
  });
  it("Login saga unit test", () => {
    testSaga(workerSagaLogin, sagaLoginAction("Bob"))
      .next()
      .call(saveSession, "Bob")
      .next({})
      .put(userSlice.actions.login({}))
      .next()
      .put(reinitAction())
      .next()
      .isDone();
  });
  it("Login saga integration test", () => {
    const expectedFinalStoreState = {
      ...initialState,
      user: {
        username: "Bob"
      },
    };
    return expectSaga(workerSagaLogin, sagaLoginAction("Bob"))
      .withReducer(reducer, { ...initialState })
      .hasFinalState(expectedFinalStoreState)
      .run();
  });
  it("Logout saga unit test", () => {
    testSaga(workerSagaLogout)
      .next()
      .call(clearSession)
      .next(clearSession())
      .put(userSlice.actions.logout())
      .next()
      .isDone();
  });
  it("Logout saga integration test", () => {
    const logoutInitialState: StoreState = {
      ...initialState,
      user: {
        // @ts-ignore
        username: "Tom Hanks"
      },
    };
    return expectSaga(workerSagaLogout)
      .withReducer(reducer, { ...logoutInitialState })
      .hasFinalState(initialState)
      .run();
  });
});
