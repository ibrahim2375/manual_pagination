import React from 'react'

function Posts({ loading, posts }) {
    return loading ? (
        <h1>loading.....</h1>
    ) : (
        <div>
            <img src={posts} alt="" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
        </div>

    )
}

export default Posts