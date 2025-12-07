import React from 'react'

export default function VideoGrid({ items }) {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Project Videos</h2>
        <div className="row g-4 justify-content-center">
          {items.map((it) => (
            <div className="col-md-4" key={it.id}>
              <div className="card h-100 text-center">
                <img
                  src={it.img}
                  className="card-img-top"
                  alt={it.title}
                  data-bs-toggle="modal"
                  data-bs-target={`#videoModal${it.id}`}
                  style={{ cursor: 'pointer' }}
                />
                <div className="card-body">
                  <p className="card-text">{it.title}</p>
                </div>
              </div>

              {/* Modal */}
              <div className="modal fade" id={`videoModal${it.id}`} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <video controls style={{ width: '100%' }}>
                        <source src={it.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
