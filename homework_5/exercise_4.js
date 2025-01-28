function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "John Doe",
          age: 30,
          email: "john@example.com",
        })
      }, 2000)
    })
  }

  async function displayUserDetails (){
    try {
        const user = await fetchData ()
        console.log(user)
    } 
    catch (error) {
        console.log('Sometring went wrong', error)
    }
  }

  displayUserDetails()