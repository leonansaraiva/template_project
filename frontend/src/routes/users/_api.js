
const base = 'http://localhost:8080';


   
export async function  get() {

    const finalurl = `${base}/users`

    try {
      const res  = await fetch(finalurl, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
		},
	    })
      
      if(res.status === 200) {
        const jsonArray = await res.json()
       
        return jsonArray
      }

    } catch (e) {
      console.log(e)
      return  e
    }

}

export async function  update(user,TOKEN) {

    const finalurl = `${base}/users/${user.id}`
    try {
      const res  = await fetch(finalurl, {
		method: 'PUT',
		headers: {
			'content-type': 'application/json',
            'Authorization':`bearer ${TOKEN}`
		},
		    body: JSON.stringify(user)
	    })

      if(res.status === 200) {
        const jsonArray = await res.json()
       
        return jsonArray
      }

    } catch (e) {
      console.log(e)
      return  e
    }

}
export async function  deleteU(user,TOKEN) {

    const finalurl = `${base}/users/${user.id}`
    console.log(user)
    try {
      const res  = await fetch(finalurl, {
		method: 'DELETE',
		headers: {
			'content-type': 'application/json',
            'Authorization':`bearer ${TOKEN}`
		},
	    })


      if(res.status === 200) {
        const jsonArray = await res.json()
       
        return jsonArray
      }

    } catch (e) {
      console.log(e)
      return  e
    }

}

export async function  create(user,TOKEN) {

    const finalurl = `${base}/users`
    console.log(user)
    try {
      const res  = await fetch(finalurl, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
            'Authorization':`bearer ${TOKEN}`
		},
		    body: JSON.stringify(user)
	    })
        // console.log(await res.text())
      if(res.status === 200) {
        const jsonArray = await res.json()
       
        return jsonArray
      } else {
        return await res.text()
      }

    } catch (e) {
      console.log(e)
      return  e
    }

}

export async function  signin(user) {

    const finalurl = `${base}/signin`
    console.log(user)
    try {
      const res  = await fetch(finalurl, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		    body: JSON.stringify(user)
	    })
        // console.log(await res.text())
      if(res.status === 200) {
        const jsonArray = await res.json()
       
        return jsonArray
      } else {
        return await res.text()
      }

    } catch (e) {
      console.log(e)
      return  e
    }

}




