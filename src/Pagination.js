import React from 'react'

function Pagination({ postsperPage, totalPosts, paginate }) {
    let pageNum = [];
    for (let i = 1; i < Math.ceil(totalPosts / postsperPage); i++) {
        pageNum.push(i);
    }
    return (
        <div className="container " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', gap: '40px' }}>

            <nav aria-label="Page navigation example ">
                <ul className="pagination">
                    {pageNum.map((no, i) => {
                        return <li key={i} className="page-item" onClick={() => paginate(no)}><a className="page-link" href="#">{no}</a></li>
                    })}

                </ul>
            </nav>

        </div>
    )
}

export default Pagination