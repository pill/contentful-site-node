import React, { Component } from 'react'

import palette from './palette'
import styled from 'styled-components'
import useBlog from './blog/useBlog'

const Nav = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Teko&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Azeret+Mono&display=swap');
  font-family: 'Teko', sans-serif;

  font-size: 35px;
  color: ${palette.nav};

  #nav-container {
    a, strong {
      margin-right: 20px;
    }

    a {
      text-decoration: none;
    }

    .selected {
      color: ${palette.nav};
      border-bottom: 2px solid ${palette.nav}
    }

    margin-bottom: 50px;
    #main-nav {
      width: 720px;
      margin: auto;
    }

    #left-nav {
      #phil-avery {
        margin-bottom: 10px;
      }

      #below-phil {
        font-size: 12px;
        line-height: 20px;
      }

      font-family: 'Azeret Mono';
      font-size: 17px;
      line-height: 25px;
      float: left;
      border-right: 1px solid ${palette.imageBorder};
      margin: 17px 15px 0 10px;
    }
  }
`

export default (props) => {
  const { entry } = useBlog()
  
  // Check if current post has 'dev' tag (only if entry is loaded)
  const isDevPost = props.section === 'post' && 
    entry && 
    entry.metadata && 
    entry.metadata.tags && 
    entry.metadata.tags.some(tag => tag.sys.id === 'dev')
  
  // Determine which nav items should be selected
  const isHomeSelected = [''].includes(props.section)
  // For posts: only select blog if entry is loaded and confirmed not to be dev post
  // This prevents flash of "blog" selected while entry is loading
  const isBlogSelected = (['blog', 'tags'].includes(props.section)) || 
    (props.section === 'post' && entry && !isDevPost)
  const isDevSelected = props.section === 'dev' || isDevPost

  return (
    <Nav>
      <div id="nav-container">
        <div id="left-nav">
          <div id='phil-avery'>Phil Avery</div>
          <div id="below-phil">
            <a href="https://www.linkedin.com/in/phillipavery/">LinkedIn</a>
            <br/><a href="https://github.com/pill">Github</a>
            <br/><a href="https://www.instagram.com/classique_phil/">@classique_phil</a>
            <br/><a href="https://www.instagram.com/pill_moto/">@pill_moto</a>
          </div>
        </div>

        <div id="main-nav">
              <a class={isHomeSelected ? 'selected' : ''}
                 href="/">home</a>
              <a class={isBlogSelected ? 'selected' : ''}
                 href='/blog'>blog</a>
              <a class={isDevSelected ? 'selected' : ''}
                 href='/dev'>dev</a>
        </div>
      </div>
    </Nav>

  )
}