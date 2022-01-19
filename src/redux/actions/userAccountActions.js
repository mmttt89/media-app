import { userAccountActionTypes } from "@redux/actionTypes/index";
import { sleep } from "@helpers/Utils";

const action = (type, payload) => ({ type, payload })

export const loginAsync = (request) => async dispatch => {
    dispatch(action(userAccountActionTypes.LOGIN_REQUESTED, request))

    //if you needed for real API calls
    // const result = await HttpClient("yourApiUrl/api/login", request)

    //fake api and response 
    await sleep(1000)

    //fake result
    //you can encrypt token as well but for simplicity we dont
    const result = {
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1laGRpIFRhZ2hkaXNpIiwiYWRtaW4iOnRydWUsImlhdCI6MTY0MjYwMTIxOSwiZXhwIjoxNjQyNjA0ODE5fQ.X_blj5_iJIjygnlTrOofXH41GHeD8-2uXoagxnxBjAw",
        user: { username: request.username }
    }
    //successfull 
    dispatch(action(userAccountActionTypes.LOGIN_REQUESTED, request))
    return Promise.resolve(result)

    //in case of error (result for error)
    // return Promise.reject(result)
}