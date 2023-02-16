import React, { useRef, useState } from 'react';

export default function App() {
  const [caption, setCaption] = useState();
  const fileInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('image', fileInputRef.current.files[0]);
    fetch('/api/uploads', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCaption('');
        fileInputRef.current.value = null;
      })
      .catch((error) => console.error(error));
    /**
     * Prevent the browser's default behavior for form submissions.
     *
     * Create a `new` FormData object.
     *
     * Append two entries to the form data object you created.
     *   1. "caption" the value of this.state.caption
     *   2. "image" the value of this.fileInputRef.current.files[0]
     *
     * Use fetch() to send a POST request to /api/uploads. The body
     * should be the form data object you created (not a JSON string)
     * Headers are not necessary as fetch will use the correct Content-Type
     * automatically (multipart/form-data).
     *
     * Then 😉,
     *   parse the JSON response body
     * Then 😉,
     *   log the parsed response body
     *   set the caption state back to an empty string
     *   assign null to this.fileInputRef.current.value to clear the file
     * Catch any error in the promise chain.
     *
     * References:
     * https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
     * https://developer.mozilla.org/en-US/docs/Web/API/FormData/append
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
     * https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
     * https://reactjs.org/docs/refs-and-the-dom.html
     */
  }

  return (
    <div className="container">
      <div className="row min-vh-100 pb-5 justify-content-center align-items-center">
        <div className="col col-md-8">
          <h3 className="text-center mb-5">React File Uploads</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Caption
              </label>
              <input
                required
                autoFocus
                type="text"
                id="caption"
                name="caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="form-control bg-light" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <input
                required
                type="file"
                name="image"
                ref={fileInputRef}
                accept=".png, .jpg, .jpeg, .gif" />
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
