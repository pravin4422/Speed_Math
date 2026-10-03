import { useState } from 'react';
import './ReportCard.css';

function ReportCard({ title, description, onDownloadExcel, onDownloadPdf }) {
  const [loadingExcel, setLoadingExcel] = useState(false);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [error, setError] = useState('');

  const handleExcelDownload = async () => {
    setError('');
    setLoadingExcel(true);
    
    try {
      const result = await onDownloadExcel();
      if (!result.success) {
        setError(result.error || 'Failed to export Excel');
      }
    } catch (err) {
      setError('Failed to export Excel');
    } finally {
      setLoadingExcel(false);
    }
  };

  const handlePdfDownload = async () => {
    setError('');
    setLoadingPdf(true);
    
    try {
      const result = await onDownloadPdf();
      if (!result.success) {
        setError(result.error || 'Failed to export PDF');
      }
    } catch (err) {
      setError('Failed to export PDF');
    } finally {
      setLoadingPdf(false);
    }
  };

  return (
    <div className="report-card">
      <div className="report-header">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="report-actions">
        <button
          onClick={handleExcelDownload}
          disabled={loadingExcel}
          className="download-btn excel-btn"
        >
          {loadingExcel ? 'Exporting...' : 'Download Excel'}
        </button>

        <button
          onClick={handlePdfDownload}
          disabled={loadingPdf}
          className="download-btn pdf-btn"
        >
          {loadingPdf ? 'Exporting...' : 'Download PDF'}
        </button>
      </div>

      {error && (
        <div className="report-error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

export default ReportCard;
