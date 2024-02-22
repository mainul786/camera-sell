import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('User created successfully!');
        const userInfo = {
          displayName: name
        }
        updateUserProfile(userInfo)
          .then(() => {

          })
          .catch(error => console.error(error))
      })
      .catch(error => console.error(error))
  }

  const handleGoogleSign = () =>{
    signInWithGoogle()
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Register here!</h1>

        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
        <p>Already Have an account? <Link to='/login'>Login</Link></p>
        <div className='divider'>OR</div>
        <button className='btn btn-outline w-full' onClick={handleGoogleSign}>Continue With Google</button>
      </div>
    </div>
  );
};

export default Signup;