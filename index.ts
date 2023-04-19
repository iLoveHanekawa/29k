async function postReq() {

    const reqBody = `name=Arjun&code=77bec3886fb88366cf4118eac979c640`
    const res = await fetch('https://dev.29kreativ.com/recruitment/levels/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer 77bec3886fb88366cf4118eac979c640'
        },
        body: reqBody
    })
    const data = await res.text()
    console.log(data)
}

postReq()
