import { useState } from "react";
import { Download, Loader2, AlertCircle } from "lucide-react";
import { WindowControls } from "../components/index.js";
import WindowWrapper from "../hoc/WindowWrapper.jsx";

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const handleRetry = () => {
    setError(false);
    setLoading(true);
    setRetryKey((k) => k + 1);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a href="files/my_resume.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <div className="resume-body">
        {loading && !error && (
          <div className="resume-loading">
            <Loader2 className="animate-spin" size={32} />
            <p>Loading resume…</p>
          </div>
        )}

        {error && (
          <div className="resume-error">
            <AlertCircle size={32} />
            <p>Failed to load resume</p>
            <button onClick={handleRetry}>
              Try Again
            </button>
          </div>
        )}

        <Document
          key={retryKey}
          file="files/my_resume.pdf"
          onLoadSuccess={() => setLoading(false)}
          onLoadError={() => {
            setLoading(false);
            setError(true);
          }}
          loading={null}
        >
          {!error && (
            <Page
              pageNumber={1}
              renderTextLayer
              renderAnnotationLayer
            />
          )}
        </Document>
      </div>
    </>
  )
};

const ResumeWindow = WindowWrapper(Resume, "resume")

export default ResumeWindow;