// 第3步：创建action，现在我们已经创建了reducer，但是还没有对应的action来操作它们，所以接下来就来编写action
// actions.js

// action也是函数
export function setPageTitle (data) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_PAGE_TITLE', data: data })
    }
}

/*
export function setInfoList (data) {
    return (dispatch, getState) => {
        // 使用fetch实现异步请求
        window.fetch('/api/getInfoList', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            let { code, data } = data
            if (code === 0) {
                dispatch({ type: 'SET_INFO_LIST', data: data })
            }
        })
    }
}*/
