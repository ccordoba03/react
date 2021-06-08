import React,{useState} from 'react'
import UserTable from'./components/UserTable';
import{v4 as uuidv4} from'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm'







export const App = () => {
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id:uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id:uuidv4(), name: 'Ben', username: 'benisphere' },
  ]
//users es el array ,set users la funcion que lo cambia use state es el hook (usersData es de donde viene la informacion)
const [users, setUsers] =useState(usersData);

// agregar usuarios , se pasa prop al component Add User Form.js

const addUser=(user)=>{

user.id=uuidv4();
setUsers([...users,user])

}

const updateUser=(id,uodateUser)=>{


}
// constante delete user

const deleteUser=(id)=>{

setUsers(users.filter((user)=>user.id!==id)

)}


// metodos para hacer edit
const [editing,setEditing]=useState(false);

const initialFormState={id:null,name:'',username:''}

// hook para identificar ID
const [currentUser,setCurrentUser]=useState(initialFormState)


// funcion para activar el hook de editing

const editRow=(user)=>{

  setEditing(true)
  setCurrentUser({id:user.id,name:user.name,username:user.username})

}
  
  return (

<div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <EditUserForm
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
         <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable  users={users} deleteUser={deleteUser}  editRow={editRow}/>
     

        </div>
      </div>
    </div>
  )
}


export default App;
