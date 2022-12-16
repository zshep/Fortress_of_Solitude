import React from "react"
import styled from 'styled-components'

const styledLoader = styled.div`.spinner {
    margin:20px auto 20px auto;
    position:relative;
    -webkit-animation: spin 1s infinite ease-in;
    animation: spin 1s infinite linear;
    height: 65px;
    width: 40px;
    background:  url(http://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Hammer_-_Noun_project_1306.svg/1088px-Hammer_-_Noun_project_1306.svg.png); 
    background-size: contain;
    background-repeat: no-repeat;
  }
  
  @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      50% { -webkit-transform: rotate(55deg); }
  }
  @keyframes spin {
      from {transform:rotate(0deg);}
      to {transform:rotate(360deg);}
  }`
function Loader(){

return (
    <styledLoader>
    <div className="spinner"></div>
    </styledLoader>

)}



module.exports = Loader 