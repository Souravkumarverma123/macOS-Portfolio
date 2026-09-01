import { useState } from "react";
import { Download, ExternalLink, Loader2 } from "lucide-react";
import { WindowControls } from "../components/index.js";
import WindowWrapper from "../hoc/WindowWrapper.jsx";

const RESUME_PATH = "/files/my_resume.pdf";

const Resume = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <div className="flex items-center gap-1">
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
            title="Open in New Tab"
          >
            <ExternalLink className="icon" size={16} />
          </a>

          <a href={RESUME_PATH}
            download
            className="cursor-pointer"
            title="Download Resume"
          >
            <Download className="icon" />
          </a>
        </div>
      </div>

      <div className="resume-body">
        {loading && (
          <div className="resume-loading">
            <Loader2 className="animate-spin" size={32} />
            <p>Loading resume…</p>
          </div>
        )}

        <iframe
          src={RESUME_PATH}
          title="Sourav Kumar's Resume"
          className="resume-frame"
          onLoad={() => setLoading(false)}
        />
      </div>
    </>
  )
};

const ResumeWindow = WindowWrapper(Resume, "resume")

export default ResumeWindow;
