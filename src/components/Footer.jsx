export default function Footer() {
  return (
    <footer className="flex flex-row justify-center align-center m-8 sticky bottom-0">
      <div className="align-center justify-center">
        This app was designed and developed by Ashlan Filbrun. © 2023 |{" "}
        <a className="hover:text-teal-600" href="https://github.com/ashfilbrun">GitHub</a>
      </div>
      <p>
        <a className="hover:text-teal-600" href="https://www.linkedin.com/in/ashlanfilbrun/">
          &nbsp;&nbsp;LinkedIn
        </a>
      </p>
    </footer>
  );
}
