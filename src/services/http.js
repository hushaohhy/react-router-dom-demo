global.$ = {
    post: (info) => {
        var bodyvalue = "";
        var arr = [];
        for (var i in info.body) {
            bodyvalue += i + "=" + info.body[i] + "&";
        }
        bodyvalue = bodyvalue.slice(0, bodyvalue.length - 1);
        fetch(global.$.URL + info.url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: bodyvalue
        }).then(resp => {
            return resp.json()
        }).then((res) => {
            info.success(res);
        }).catch(function (e) {
            info.error(e);
        });
    },
    get: (info) => {
        fetch(global.$.URL+info.url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            // body:JSON.stringify(info.body)
        }).then(resp=>{
            return resp.json()
        }).then((res)=>{
            info.success(res);
        }).catch(function (e) {
            info.error(e);
        })
    },
    delete: (info) => {
        fetch(global.$.URL + info.url, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            // body:JSON.stringify(info.body)
        }).then(resp => {
            return resp.json()
        }).then((res) => {
            info.success(res);
        }).catch(function (e) {
            info.error(e);
        })
    },
    put: (info) => {
        let bodyvalue = "";
        let arr = [];
        for (let i in info.body) {
            bodyvalue += i + "=" + info.body[i] + "&";
        }
        bodyvalue = bodyvalue.slice(0, bodyvalue.length - 1);
        fetch(global.$.URL + info.url, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: bodyvalue
        }).then(resp => {
            return resp.json()
        }).then((res) => {
            info.success(res);
        }).catch(function (e) {
            info.error(e);
        });
    },
}