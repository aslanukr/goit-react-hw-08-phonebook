export const handleAuthFullfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isAuth = true;
};

export const handleAuthRejected = (state, { payload }) => {
  state.error = payload;
};

export const handleLogOutFullfilled = state => {
  state.user = { name: null, email: null };
  state.token = '';
  state.isAuth = false;
  state.error = '';
};

export const handleLogOutRejected = (state, { payload }) => {
  state.token = '';
  state.isAuth = false;
  state.error = payload;
};

export const handleCurrentUserFullfilled = (state, { payload }) => {
  state.user = payload;
  state.isAuth = true;
  state.isFetchingCurrentUser = false;
};

export const handleCurrentUserPending = state => {
  state.isFetchingCurrentUser = true;
};

export const handleCurrentUserRejected = (state, { payload }) => {
  state.isFetchingCurrentUser = false;
  state.error = payload;
};
