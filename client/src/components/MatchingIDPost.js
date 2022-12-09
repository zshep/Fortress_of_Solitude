import React, {useState} from 'react'
import DeleteModal from './DeleteModal';
import PostBanner from './PostBanner'
import ProfilePic from './ProfilePic'
import SmallGreenSticky from './StickyNotes/SmallGreenSticky';
import SmallStickyNote from './StickyNotes/SmallStickyNote';


function MatchingIDPost() {

  return (
    <div className="container box p-6
    has-background-light">
<PostBanner />

<div className="tile is-ancestor py-6">
<div className="tile is-parent is-vertical">
<div className="tile is-child box is-12 has-text-centered" style={{ fontFamily: 'Permanent Marker', background: '#e3e3e3', fontSize: '32px'  }}>
    <h1>Dog Poop!</h1>
</div>
<div className="tile is-parent ">
<div className="tile is-parent is-3 ">
<div className="tile is-child box has-text-centered" style={{  background: '#f7fff2'  }}>
    <h1 >Category</h1>
    <SmallStickyNote title={'Clean Up'}/>
</div>
</div>
<div className="tile is-parent  is-3">
<div className="tile is-child box has-text-centered" style={{ background: '#fcfce6'  }}>
    <h1>Creator -</h1>
    <SmallGreenSticky title={'Karen Karenson'}/>
</div>
</div>
<div className="tile is-parent  is-2">
<div className="tile is-child box has-text-centered" style={{  background: '#f7fff2'  }}>
    <ProfilePic />
</div>
</div>
<div className="tile is-parent  is-4">
<div className="tile is-child box has-text-centered" style={{ background: '#fcfce6'  }}>
    <h1>Time Posted</h1>
    <SmallGreenSticky title={'01/19/2022 11:45 PM'} />
</div>
</div>
</div>
<div className="tile box is-12 has-text-centered" style={{  background: '#e3e3e3'  }}>
<h1>There are bunch of bags of dop poop all over the trail behind the neighborhood. I don't understand why people bag it, and then just leave it. Like might as well let it biodegrade right? Anyways, anyone wanna clean it?</h1>
</div>



</div>
</div>

<div className="container has-text-centered">

<button className="button m-4"  onMouseOver={(e) => {e.target.style.transform = 'scale(1.25)';}} onMouseOut={(e) => {e.target.style.transform = 'scale(1)';}} style={{ fontFamily: 'Permanent Marker', background: '#ffa'  }}>
  Edit Job Details
</button>
<DeleteModal />


</div>

</div>


  )
}

export default MatchingIDPost