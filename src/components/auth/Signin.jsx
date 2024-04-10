import React, { useState } from 'react';
import signInRightImg from '/public/other/signin.png'
import LogoImg from '/public/other/logo.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '/public/css/signin.css'


const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className='signinMain'>
      <div className="signInLeftDiv">
        <div className="signInBox">
            <div className="LogoAndTxtBox">
              <div className="IdeaHubDiv">
                  <div className="logoDiv">
                      <img src={LogoImg} alt="logo image" />
                  </div>
                  <div className="txt">
                      <span className='thick'>I</span>
                      <span>dea </span>
                      <span className='thick'>H</span>
                      <span>ub</span>
                  </div>
              </div>
              <div className="SignInTxtDiv">
                  <div className="signInTxt">Sign In</div>
                  <div className="signInExtraTxt">Login to stay connected</div>
              </div>
            </div>
            <div className="inputParDiv">
              <FormControl className='signInInput'  size='medium' sx={{ width: '50ch'}} variant="standard">
                <label htmlFor="emailSignin">
                  <span className='starMark'>*</span>
                  <span>Email</span>
                  </label>
                <OutlinedInput 
                  className='borderless-input'
                  sx={{background:'#F3F3F3'}}
                  id="outlined-adornment-weight"
                  placeholder='email@gmail.com'
                  endAdornment={<InputAdornment position="end"><MailOutlineIcon sx={{color:'#0407446E',fontSize:20}}/></InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'email',
                    
                  }}
                />
              </FormControl>
              <FormControl className='signInInput'  size='medium' sx={{ width: '50ch'}} variant="standard">
                <label htmlFor="outlined-adornment-password">
                  <span className='starMark'>*</span>
                  <span>Password</span>
                </label>
                <OutlinedInput
                  className='borderless-input'
                  sx={{background:'#F3F3F3'}}
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  endAdornment={
                    <InputAdornment position="end" >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        
                        edge="end"
                        sx={{color:'#0407446E',fontSize:20}}
                      >
                        {showPassword ? <VisibilityOff  /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <div className="forgtPassTxt">Forgot Password?</div>
              <button className='SignInbtn'>Sign In</button>
            </div>
            <div className="ParOfDirectToSignUp">
              <span>Don't have an account?</span>
              <span className='DarkBlueTxt'>Register</span>
            </div>
        </div>
      </div>
      <div className="signInRightDiv">
        <img src={signInRightImg} alt="background image" />
      </div>
    </div>
  );
}

export default Signin;
