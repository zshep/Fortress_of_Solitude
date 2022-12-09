import React from "react";

function Menu() {
  return (
    <aside class="menu pl-2  pt-4">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li>
        <a href="/board" class="button m-4"  onMouseOver={(e) => {e.target.style.transform = 'scale(1.25)'; }} onMouseOut={(e) => {e.target.style.transform = 'scale(1)';}} style={{ fontFamily: 'Permanent Marker', background: '#dbe0d7', }}>
              See All Posts
            </a>
        </li>
        <li>
        <a href="/createpost" class="button m-4"  onMouseOver={(e) => {e.target.style.transform = 'scale(1.25)';}} onMouseOut={(e) => {e.target.style.transform = 'scale(1)';}} style={{ fontFamily: 'Permanent Marker', background: '#c3c9bf'  }}>
              Create a Post
            </a>
        </li>
        <li>
        <a href="/post" class="button m-4"  onMouseOver={(e) => {e.target.style.transform = 'scale(1.25)';}} onMouseOut={(e) => {e.target.style.transform = 'scale(1)';}} style={{ fontFamily: 'Permanent Marker', background: '#e3e3e3'  }}>
              Temp one post
            </a>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;
