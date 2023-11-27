REDUX-SAGA FLOW:

when some action is dispatched like: dispatch({ type: TypeActions.GET_USERS }). // inside useEffect i.e.

Our watcher saga will take that action and call our handler (worker saga) function:
function\* getUsersSaga() {...}

That function, getUsersSaga(), will call our API request and return data:
const response = yield call(getUsersAPI);

With that data, we gonna dispatch redux action to set users whatever that data is. state = action.payload:
yield put(getUsersSlice(response.data));
