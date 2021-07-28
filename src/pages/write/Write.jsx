import './write.css';

export default function Write() {
  return (
    <div className="write">
        <img
          className="writeImg"
          src="https://thumbs-prod.si-cdn.com/P4Smi9MthEBXH7pdW8Y-bvwR6ts=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg"
          alt="Karlen Nersisyan"
        />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: ' none' }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell Your Story... "
            type="text"
            className="writeInput writeIndex"
          ></textarea>
        </div>
        <button className="writeSubmit">
            Publish
        </button>
      </form>
    </div>
  );
}
