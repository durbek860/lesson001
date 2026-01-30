import React, { useEffect, useState, useTransition } from 'react'
import './Users.css'
import axios from 'axios'
import { FiX } from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Users() {
  const navigate = useNavigate()
  let API = "https://fakestoreapi.com"

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [createloading, startTransition] = useTransition()
  const [deleteLoading, startDeleteTransition] = useTransition()

  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    setLoading(true)
    axios.get(API + "/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  async function createUser(e) {
    try {
      e.preventDefault()

      startTransition(async () => {
        let data = {
          firstname,
          lastname,
          username,
          password,
          email,
          phone
        }

        if (!data.firstname || !data.lastname || !data.email || !data.password) {
          return toast.error("kerakli qismlarni toldiring!")
        }

        await axios.post(API + "/users", data)
          .then(res => console.log(res))
          .catch(err => console.log(err))

        toast("User created", { type: "success" })
      })

    }
    catch (err) {
      console.log(err);
    }
  }


  const deleteUser = (id) => {
    startDeleteTransition(async () => {
      await axios.delete(API + "/users/" + id)
        .then(res => {
          console.log(res)
          toast.success("user deleted")
        })
        .catch(err => {
          console.log(err)
          toast.error("foydalanuvchini o'chirishda xatolik")
        })
    })
  }

  const edit = (data) => {
    // modalni ochish kodini
    console.log(data);

    setFirstname(data.name.firstname)
  }


  return (
    <div className='users'>
      <ToastContainer />
      <button onClick={() => setOpen(true)}>Add user</button>

      <div
        style={{ display: open ? "flex" : "none" }}
        className="add_user_modal"
      >
        <form onSubmit={(e) => createUser(e)}>
          <FiX onClick={() => setOpen(false)} />
          <h3>Add new user</h3>

          <label htmlFor="">Firstname</label>
          <input
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
          />

          <label htmlFor="">Lastname</label>
          <input
            type="text"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />

          <label htmlFor="">username</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <label htmlFor="">password</label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <label htmlFor="">email</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <label htmlFor="">phone</label>
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />

          <button disabled={createloading} > {createloading ? "Loading..." : "Add"}</button>
        </form>
      </div>

      <div style={{ display: open2 ? "flex" : "none" }} className="editwindow">
        <div className="inf">
          <FiX onClick={() => setOpen2(false)} />
          <div className="lablel">
            <label>Name</label>
            <input
              type="text"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
            />
          </div>
          <div className="lablel">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="lablel">
            <label>UserName</label>
            <input type="text" />
          </div>
          <div className="lablel">
            <label>Password</label>
            <input type="text" />
          </div>
          <div className="lablel">
            <label>Phone</label>
            <input type="text" />
          </div>
          <button>Save</button>
        </div>
      </div>

      {
        loading ?
          <div className="loader"></div>
          :
          <table border={1} style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>email</th>
                <th>username</th>
                <th>password</th>
                <th>phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.map((item) =>
                  <tr onClick={()=> navigate("/users/" + item.id) } key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name.firstname + " " + item.name.lastname}</td>
                      <td>{item.email}</td>
                      <td>{item.username}</td>
                      <td>{item.password}</td>
                      <td>{item.phone}</td>
                      <td>
                        <button disabled={deleteLoading} >
                          <FaTrash onClick={() => deleteUser(item.id)} />
                        </button>
                        <button onClick={() => setOpen2(true)}>
                          <FaEdit onClick={() => edit(item)} />
                        </button>
                      </td>
                  </tr>
                )
              }
            </tbody>
          </table>
      }

    </div>

  )
}

export default Users
