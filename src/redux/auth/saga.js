import { all, call, fork, put, takeEvery } from "redux-saga/effects";
// import { auth } from "helpers/Firebase";
import { adminRoot } from "constants/default-values";
import { setCurrentUser } from "helpers/utils";
import apiClient from "services/axios";

import {
  LOGIN_USER,
  // REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from "../actions";

import {
  loginUserSuccess,
  loginUserError,
  // registerUserSuccess,
  // registerUserError,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetPasswordSuccess,
  resetPasswordError,
} from "./actions";
import { saveState } from "helpers/local-storage";

export function* watchLoginUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

const loginWithEmailPasswordAsync = async (email, password) => {
  // eslint-disable-next-line no-return-await
  try {
    let response = await apiClient("login", {
      user_id: email,
      user_pass: password,
    });
    return {
      code: response.data.code,
      ...response.data.data,
    };
  } catch (error) {
    return error;
  }
};

function* loginWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const loginUser = yield call(loginWithEmailPasswordAsync, email, password);
    if (loginUser.code && loginUser.code === 200) {
      const item = {
        uid: loginUser.user.uid,
        sessionId: loginUser.session_id,
        ...loginUser.user,
      };
      setCurrentUser(item);
      saveState("gogo_menu_permissions", loginUser?.menus || {});
      yield put(loginUserSuccess(item));
      history.push(adminRoot);
    } else {
      yield put(loginUserError(loginUser.message));
    }
  } catch (error) {
    yield put(loginUserError(error));
  }
}

// export function* watchRegisterUser() {
//   // eslint-disable-next-line no-use-before-define
//   yield takeEvery(REGISTER_USER, registerWithEmailPassword);
// }

// const registerWithEmailPasswordAsync = async (email, password) =>
//   // eslint-disable-next-line no-return-await
//   await auth
//     .createUserWithEmailAndPassword(email, password)
//     .then((user) => user)
//     .catch((error) => error);

// function* registerWithEmailPassword({ payload }) {
//   const { email, password } = payload.user;
//   const { history } = payload;
//   try {
//     const registerUser = yield call(
//       registerWithEmailPasswordAsync,
//       email,
//       password
//     );
//     if (!registerUser.message) {
//       const item = { uid: registerUser.user.uid, ...currentUser };
//       setCurrentUser(item);
//       yield put(registerUserSuccess(item));
//       history.push(adminRoot);
//     } else {
//       yield put(registerUserError(registerUser.message));
//     }
//   } catch (error) {
//     yield put(registerUserError(error));
//   }
// }

export function* watchLogoutUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGOUT_USER, logout);
}

const logoutAsync = async (history) => {
  await apiClient("logout", {}).then((response) => response);
};

function* logout({ payload }) {
  const { history } = payload;
  yield call(logoutAsync, history);
  setCurrentUser();
  history.push(adminRoot);
}

export function* watchForgotPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

const forgotPasswordAsync = async (email) => {
  // eslint-disable-next-line no-return-await
  // return await auth
  //   .sendPasswordResetEmail(email)
  //   .then((user) => user)
  //   .catch((error) => error);
};

function* forgotPassword({ payload }) {
  const { email } = payload.forgotUserMail;
  try {
    const forgotPasswordStatus = yield call(forgotPasswordAsync, email);
    if (!forgotPasswordStatus) {
      yield put(forgotPasswordSuccess("success"));
    } else {
      yield put(forgotPasswordError(forgotPasswordStatus.message));
    }
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}

export function* watchResetPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(RESET_PASSWORD, resetPassword);
}

const resetPasswordAsync = async (resetPasswordCode, newPassword) => {
  // eslint-disable-next-line no-return-await
  // return await auth
  //   .confirmPasswordReset(resetPasswordCode, newPassword)
  //   .then((user) => user)
  //   .catch((error) => error);
};

function* resetPassword({ payload }) {
  const { newPassword, resetPasswordCode } = payload;
  try {
    const resetPasswordStatus = yield call(
      resetPasswordAsync,
      resetPasswordCode,
      newPassword
    );
    if (!resetPasswordStatus) {
      yield put(resetPasswordSuccess("success"));
    } else {
      yield put(resetPasswordError(resetPasswordStatus.message));
    }
  } catch (error) {
    yield put(resetPasswordError(error));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    // fork(watchRegisterUser),
    fork(watchForgotPassword),
    fork(watchResetPassword),
  ]);
}
